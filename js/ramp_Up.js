// Write a function called add(num1, num2) which returns the sum of a and b
// Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
// Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments
// function add(num1, num2) {
//     return(num1 + num2);
// }
//
// function square(numToSqr) {
//     return(Math.pow(numToSqr, 2));
// }
//
// function sumOfSquares(a, b) {
//    a = square(a);
//    b = square(b);
//     console.log(add(a, b))
// }
// sumOfSquares(3, 4)

// Write a function named getFizzBuzz(startingNum) which performs the following actions:
//     If startingNum is divisible by 3
// console log "fizz"
// Else, if startingNum is divisible by 5
// console log "buzz"
// If startingNum is divisible by 3 AND divisible by 5
// return a string which says "FIZZ BUZZ"
// Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
// What if getFizzBuzz doesn't return a value (VOID)?
// How do you want to handle that?

// function getFizzBuzz(startingNum) {
//     if (startingNum % 3 === 0 && startingNum % 5 === 0 ) {
//         return("FIZZ BUZZ")
//     } else if (startingNum % 3 === 0 && startingNum % 5 !== 0) {
//         console.log("fizz")
//     } else if (startingNum % 3 !== 0 && startingNum % 5 === 0) {
//         console.log("buzz")
//     } else {
//         console.log("This number is not evenly divisible by 3 or 5. Give it to Fizban the Fabulous")
//     }
// };

// console.log(getFizzBuzz(15))
// getFizzBuzz(9)
// getFizzBuzz(10)
// getFizzBuzz(11)

// function tryGetFizzBuzz(input) {
//     let maybeFizzBuzzIDK = getFizzBuzz(input);
//     if (!!maybeFizzBuzzIDK) {
//         console.log(maybeFizzBuzzIDK)
//     }
// }
//
// function runThatProgramThing(){
//     tryGetFizzBuzz(9)
//     tryGetFizzBuzz(10)
//     tryGetFizzBuzz(15)
//     tryGetFizzBuzz(11)
// }
// runThatProgramThing()

// Define a function named getPassword() which performs the following actions:
//     Using prompt(), alert(), variables, and a while-loop,
//     ask the user to input their password until their entry matches your hard-coded password value.
//     HINT: start by defining the correct password and don't forget to link your html file


(function getPassword() {
    let password = "jump"
    let userEntry = prompt("Enter your password");
    while (userEntry !== password) {
        alert("Incorrect Password");
        userEntry = prompt("Enter your password")
    }
        alert("Success!")
})();