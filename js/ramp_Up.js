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


// (function getPassword() {
//     let password = "mybologneseisawesome"
//     let userEntry = prompt("Enter your password");
//     while (userEntry !== password) {
//         alert("Incorrect Password");
//         userEntry = prompt("Enter your password")
//     }
//         alert("Success!")
// })();
//
// Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
//     This function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.
//     While the counter is not equivalent to the meaningfulNum, continue the loop.
//     Once that condition is broken, console log a string telling the user "The meaning of life, the universe,
//     and everything is [your meaningful number]"
// Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the
// value of meaningfulNum is a non-numeric?
//     Write some code to account for this case. How the function handles the situation is up to you!
//     Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a
//     separate message at the end of the function to say: "Did you bring your towel?"

// function getMeaningOfLife (meaningfulNum) {
//     let counter = 0
//     meaningfulNum = parseInt(meaningfulNum)
//     if (isNaN(meaningfulNum) || !isFinite(meaningfulNum)) {
//         console.log("This is not a meaningful number. Perhaps it is the Meaning of Liff, but not the meaning of Life")
//     } else if (meaningfulNum === 42) {
//         console.log("The meaning of life, the universe, and everything is " + meaningfulNum)
//         console.log("Did you bring your towel? Are you sure you know what the question is? Let's build a bigger supercomputer to figure out the question!")
//     }
//     else {
//         while (meaningfulNum !== counter) {
//             counter++
//         }
//         console.log("The meaning of life, the universe, and everything is " + meaningfulNum)
//     }
// }
// getMeaningOfLife(4)
// getMeaningOfLife(42)
// getMeaningOfLife("Bob")
// getMeaningOfLife(Infinity)
// getMeaningOfLife("42")
// getMeaningOfLife(false)
// getMeaningOfLife(-1)