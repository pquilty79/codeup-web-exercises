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

(function getFizzBuzz(startingNum) {
    if (startingNum % 3 === 0 && startingNum % 5 === 0 ) {
        return("FIZZ BUZZ")
    } else if (startingNum % 3 === 0 && startingNum % 5 !== 0) {
        console.log("fizz")
    } else if (startingNum % 3 !== 0 && startingNum % 5 === 0) {
        console.log("buzz")
    } else {
        console.log("Fizbin the Fabulous")
    }
})(11);