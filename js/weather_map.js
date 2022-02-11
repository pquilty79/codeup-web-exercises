


mapboxgl.accessToken = myMapBoxToken;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    zoom: 2,
    center: [-98.4916, 29.4252],
    // pitch: 45
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
// map.on('load', (e) => {
//     geolocate.trigger()
// });

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


let myData = {}
function getWeather() {
    $.get("https://api.openweathermap.org/data/2.5/onecall?", {
        APPID: myWeatherToken,
        lat: marker.getLngLat().lat,
        lon: marker.getLngLat().lng,
        units: "imperial"
    }).done(function (data) {
        myData = data
        console.log(myData)
        pageData()
    })
}

function pageData() {
    let page_content = document.querySelector('#page_content');
    let {icon} = myData.current.weather[0];
    page_content.innerHTML = `<div class="row flex-container d-flex justify-content-center">
                <div class="col-12 grid-margin stretch-card">
                    <!--weather card-->
                    <div class="card card-weather">
                        <div class="card-body">
                            <div class="weather-date-location">
                                <h3>Friday</h3>
                                <p class="text-gray"> <span class="weather-date">25 March, 2019</span> <span class="weather-location">Sydney, Australia</span> </p>
                            </div>
                            <div class="weather-data">
                                <div class="mr-auto">
                                    <h4 class="display-3">${Math.round(myData.current.temp)}</h4>
                                    <p class="text-gray"> Cloudy </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="d-flex weakly-weather">
                                <div class="weakly-weather-item">
                                    <p class="mb-0"> Sun </p> <i class="mdi mdi-weather-cloudy"></i>
                                    <p class="mb-0">${Math.round(myData.daily[0].temp.day)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1"> Mon </p> <i class="mdi mdi-weather-hail"></i>
                                    <p class="mb-0">${Math.round(myData.daily[1].temp.day)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1"> Tue </p> <i class="mdi mdi-weather-partlycloudy"></i>
                                    <p class="mb-0">${Math.round(myData.daily[2].temp.day)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1"> Wed </p> <i class="mdi mdi-weather-pouring"></i>
                                    <p class="mb-0">${Math.round(myData.daily[3].temp.day)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1"> Thu </p> <i class="mdi mdi-weather-pouring"></i>
                                    <p class="mb-0">${Math.round(myData.daily[4].temp.day)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1"> Fri </p> <i class="mdi mdi-weather-snowy-rainy"></i>
                                    <p class="mb-0">${Math.round(myData.daily[5].temp.day)}°</p>
                                </div>
                                <div class="weakly-weather-item">
                                    <p class="mb-1"> Sat </p> <i class="mdi mdi-weather-snowy"></i>
                                    <p class="mb-0">${Math.round(myData.daily[6].temp.day)}°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}







