(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            return (Math.PI * Math.pow(circle.radius, 2));
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            doRounding = this.getArea % 2 !== 0
            if (doRounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea(circle)));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + (this.getArea(circle)));
                }
            },
        };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();