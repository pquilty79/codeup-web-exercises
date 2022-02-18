

let startLocation = [-98.4916, 29.4252];
mapboxgl.accessToken = myMapBoxToken;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    zoom: 5,
    center: startLocation,
});
const nav = new mapboxgl.NavigationControl({
    visualizePitch: true,
    showCompass: true
});
map.addControl(nav, 'bottom-left');
let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});
map.addControl(geocoder, 'top-left');
// Add geolocate control to the map.
// Initialize the geolocate control.
const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);


map.on('load', function() {
    //tried to set initial location to geolocation
    // geolocate.trigger();
    // startLocation = [GeolocationCoordinates.longitude, GeolocationCoordinates.latitude]
    geocode(startLocation, myMapBoxToken).then(function (coordinates) {
        geocoder.clear()
        marker = new mapboxgl.Marker({draggable: true, color: "purple"})
            .setLngLat(coordinates)
            .addTo(map)
            .addTo(map);
        marker.on('dragend', getWeather)
        getWeather()
    });
});



// change map type functionality
const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');
for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}


geocoder.on('result', function(e) {
         geocoder.clear()
         marker = new mapboxgl
             .Marker({draggable: true, color: "purple"})
             .setLngLat(e.result.center)
             .addTo(map)
         marker.on('dragend', getWeather)
         getWeather()
     });


let myData = {};
function getWeather() {
    $.get("https://api.openweathermap.org/data/2.5/onecall?", {
        APPID: myWeatherToken,
        lat: marker.getLngLat().lat,
        lon: marker.getLngLat().lng,
        units: "imperial"
    }).done(function (data) {
        myData = data
        console.log(myData)
        getCity()
    })
}
let city = ''
function getCity() {
    $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${myData.lon},${myData.lat}.json?access_token=${myMapBoxToken}`
    ).done(function (data){
        console.log(data)
        city = data.features[3].place_name;
        console.log(city)
        pageData(city)
    })
}


const daysOfTheWeekShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysOfTheWeekLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function pageData(city) {
    let date = new Date(myData.current.dt * 1000);
    let dayOfTheWeek = daysOfTheWeekLong[date.getDay()];
    let currentMonth = month[date.getMonth()];
    let page_content = document.querySelector('#page_content');
    page_content.innerHTML = `<div class="row flex-container d-flex justify-content-center">
                <div class="col-12 grid-margin stretch-card">
                    <!--weather card-->
                    <div class="card card-weather">
                        <div class="card-body">
                            <div class="weather-date-location">
                                <img class="top_icon" src="http://openweathermap.org/img/wn/${myData.current.weather[0].icon}.png">
                                <h3>${dayOfTheWeek}</h3>
                                <p class="text-gray"> <span class="weather-date">${currentMonth} ${date.getDate()}, ${date.getFullYear()}</span><br><span class="weather-location">${city}</span> </p>
                            </div>
                            <div class="weather-data">
                                <div class="mr-auto">
                                    <h4 class="display-3">${Math.round(myData.current.temp)}° F</h4> 
                                    <p class="text-gray">${myData.current.weather[0].main}<br>Feels like ${Math.round(myData.current.feels_like)}° F</p>
                                    <p class="text-gray">Humidity ${myData.current.humidity}%\u00A0\u00A0\u00A0Wind ${myData.current.wind_speed} mph<br>UV Index ${myData.current.uvi}\u00A0\u00A0\u00A0Dew Point ${myData.current.dew_point} mph</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="d-flex weakly-weather">
                                <div class="weakly-weather-item col-12">
                                    <p class="mb-0">${daysOfTheWeekShort[date.getDay()]}</p><img src="http://openweathermap.org/img/wn/${myData.daily[0].weather[0].icon}.png">
                                    <p class="mb-0">L: ${Math.round(myData.daily[0].temp.min)}°\u00A0 H: ${Math.round(myData.daily[0].temp.max)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1">${daysOfTheWeekShort[date.getDay()+1]}</p><img src="http://openweathermap.org/img/wn/${myData.daily[1].weather[0].icon}.png">
                                    <p class="mb-0">L:${Math.round(myData.daily[1].temp.min)}°\u00A0 H: ${Math.round(myData.daily[1].temp.max)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1">${daysOfTheWeekShort[date.getDay()+2]}</p><img src="http://openweathermap.org/img/wn/${myData.daily[2].weather[0].icon}.png">
                                    <p class="mb-0">L: ${Math.round(myData.daily[2].temp.min)}°\u00A0 H: ${Math.round(myData.daily[2].temp.max)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1">${daysOfTheWeekShort[date.getDay()+3]}</p><img src="http://openweathermap.org/img/wn/${myData.daily[3].weather[0].icon}.png">
                                    <p class="mb-0">L: ${Math.round(myData.daily[3].temp.min)}°\u00A0 H: ${Math.round(myData.daily[3].temp.max)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1">${daysOfTheWeekShort[date.getDay()+4]}</p><img src="http://openweathermap.org/img/wn/${myData.daily[4].weather[0].icon}.png">
                                    <p class="mb-0">L: ${Math.round(myData.daily[4].temp.min)}°\u00A0 H: ${Math.round(myData.daily[4].temp.max)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1">${daysOfTheWeekShort[date.getDay()+5]}</p><img src="http://openweathermap.org/img/wn/${myData.daily[5].weather[0].icon}.png">
                                    <p class="mb-0">L: ${Math.round(myData.daily[5].temp.min)}°\u00A0 H: ${Math.round(myData.daily[5].temp.max)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1">${daysOfTheWeekShort[date.getDay()+6]}</p><img src="http://openweathermap.org/img/wn/${myData.daily[6].weather[0].icon}.png">
                                    <p class="mb-0">L: ${Math.round(myData.daily[6].temp.min)}°\u00A0 H: ${Math.round(myData.daily[6].temp.max)}°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}







