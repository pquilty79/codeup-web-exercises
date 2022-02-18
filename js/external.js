"use strict";

// console.log("Hello from external JavaScript!")
// alert("Welcome to my website!");
// var userInput = prompt("What is your favorite color?");
// alert("Great, " + userInput + " is my favorite color too!");


//Redone with prompts and alerts

// alert("Welcome to old fashioned video!");
// var movieOne = prompt("What movie did you rent?");
// var movieOneDays = parseInt(prompt("How long did you rent it for?"));
// var movieTwo = prompt("What other movie did you rent?");
// var movieTwoDays = parseInt(prompt("How long did you rent it for?"));
// var movieThree = prompt("What other movie did you rent?");
// var movieThreeDays = parseInt(prompt("How long did you rent it for?"));
// let totalDays = movieOneDays + movieTwoDays + movieThreeDays
// let movies = [movieOne,movieTwo, movieThree];
// console.log(movies)
// confirm("You rented the following movies:" + movies + " for a total of " + totalDays + " days.")
// console.log(totalDays)
// let price = totalDays * 3
// console.log(price)
// alert("You owe a total of $" + price)


// alert("Welcome to Salary Calculator!")
// let googleWage = 400, amazonWage = 380, facebookWage = 350;
// let googleHours = parseFloat(prompt("How many hours did you work for Google?"));
// let amazonHours = parseFloat(prompt("How many hours did you work for Amazon?"));
// let facebookHours = parseFloat(prompt("How many hours did you work for Facebook?"));
// let salary = (googleWage * googleHours) + (amazonWage * amazonHours) + (facebookWage * facebookHours);
// alert("You made $" + salary + " last week");

// let isFull = confirm("Is this this class full?")
// let doesConflict = confirm("Does this class overlap with another the student is enrolled in?")
// if ((isFull === true) || (doesConflict === true)) {
//     alert("Student Cannot Enroll");
// } else {
//     alert("Student Can Enroll");
// }

function applyoffer() {
    var premiumMember = confirm("Are you a premium member?");
    var numberOfItems = parseInt(prompt("How many items are you purchasing?"));
    var hasExpired = confirm("Has the offer expired?");
    if (premiumMember === true) {
        if (hasExpired === true) {
            alert("Offer cannot be applied")
        } else
            alert("Offer can be applied")
        } else {
            if  ((hasExpired === false) && (numberOfItems > 2)) {
                alert("Offer can be applied")
            } else {
                alert("Offer cannot be applied")
                }
            }
        }
applyoffer()