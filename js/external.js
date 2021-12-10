"use strict";

// console.log("Hello from external JavaScript!")
// alert("Welcome to my website!");
// var userInput = prompt("What is your favorite color?");
// alert("Great, " + userInput + " is my favorite color too!");

// original examples
// let littleMermaid = 3, brotherBear = 5, hercules = 1;
// let movies = [littleMermaid, brotherBear, hercules]
// let price = 3 * movies.reduce((a, b) => a + b, 0)
// console.log("$" + price)
// let googleWage = 400, amazonWage = 380, facebookWage = 350;
// let googleHours = 6, amazonHours = 4, facebookHours = 10;
// salary = (googleWage * googleHours) + (amazonWage * amazonHours) + (facebookWage * facebookHours);
// console.log("$" + salary);
//
// let isFull = false;
// let doesConflict = false;
// if ((isFull === true) || (doesConflict === true)) {
//     console.log("Student Cannot Enroll");
// } else {
//     console.log("Student Can Enroll");
// }
//
// var premiumMember = false
// var numberOfItems = 3
// var hasExpired = false
// if (premiumMember === true) {
//     if (hasExpired === true) {
//         console.log("Offer cannot be applied")
//     } else
//         console.log("Offer can be applied")
// } else {
//     if  ((hasExpired === false) && (numberOfItems > 2)) {
//         console.log("Offer can be applied")
//     } else {
//         console.log("Offer cannot be applied")
//     }
// }



alert("Welcome to old fashioned video!");
var movieOne = prompt("What movie did you rent?");
var movieOneDays = parseInt(prompt("How long did you rent it for?"));
var movieTwo = prompt("What other movie did you rent?");
var movieTwoDays = parseInt(prompt("How long did you rent it for?"));
var movieThree = prompt("What other movie did you rent?");
var movieThreeDays = parseInt(prompt("How long did you rent it for?"));
let totalDays = movieOneDays + movieTwoDays + movieThreeDays
let movies = [movieOne,movieTwo, movieThree];
console.log(movies)
confirm("You rent the following movies:" + movies + " for a total of " + totalDays + " days.")
console.log(totalDays)
let price = totalDays * 3
console.log(price)
alert("You owe a total of $" + price)


