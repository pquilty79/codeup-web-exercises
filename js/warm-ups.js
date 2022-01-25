"use strict";


// function doesQualify(creditScore, cashOnHand) {
//     if (creditScore > 680 && cashOnHand >= 4000) {
//         console.log("This client qualifies with good credit.");
//     } else if (creditScore <= 680 && cashOnHand >= 10000) {
//         console.log("This client qualifies with a large down payment.");
//     } else {
//         console.log("This client has been rejected. You want to avoid sending the repo man.")
//     }
// }
//
// doesQualify(590, 12000);
// doesQualify(720, 5000);
// doesQualify(720, 3000);
// doesQualify(590,9000);
//

// (function isFive(number) {
//     return number === 5;
//     })(2);


// (function isMultipleOfThree() {
//         let input = parseFloat(prompt("Give me a number."));
//         if (isNaN(input)) {
//             alert("This is not a number")
//         } else if (input % 3 === 0) {
//             alert(input + " is a multiple of three")
//         } else {
//             alert(input + " is not a multiple of three")
//         }
//     }
// )();
//
// let i = 2;
// while (i < 25) {
//     console.log(i);
//     i = i + 2
// }

//
// const myArray = ["fun", "exercise", "for", "class"];
// (function arrayToString(myArray) {
//     let join = (myArray, separator = " ") => {
//         let concatString = "";
//         for (let i = 0; i < myArray.length; i++) {
//             if (concatString) {
//                 concatString += separator;
//             }
//             concatString += myArray[i];
//         }
//         return concatString
//     }
//     console.log(join(myArray, " "));
// })(myArray);


//exercise to remove value from array
// const bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll(array, value) {
//     let newArray = []
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] !== value) {
//                 newArray.push(array[i]);
//             }
//         }
//     return newArray;
// }
//
// console.log(removeAll(bugs, "ant"))

function reverseString(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let newString = reverseArray.join("");
    console.log(newString)
}

reverseString("alucard");