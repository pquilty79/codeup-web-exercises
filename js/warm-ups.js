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

// function reverseString(string) {
//     let splitString = string.split("");
//     let reverseArray = splitString.reverse();
//     let newString = reverseArray.join("");
//     console.log(newString)
// }
//
// reverseString("alucard");

// function findAverage(array) {
//     let sum = array.reduce((partialSum, a) => partialSum + a, 0);
//     return sum / array.length
// }
// console.log(findAverage(([5,4,3,2,1])));
//
//
// function myMin(myNums) {
//     let theMin = Infinity;
//     myNums.forEach(function(aNum) {
//         if(aNum < theMin) {
//             theMin = aNum;
//         }
//     });
//     return theMin;
// }
//
// console.log(myMin([5, 2, 7, 8, 32, 1]));

// function sumOfSquares(a, b) {
//     return Math.pow(a, 2) + Math.pow(b, 2);
// }
// console.log(sumOfSquares(2, 3))

// function whichStringIsLonger(string1, string2) {
//     if (string1.length > string2.length) {
//         return "first"
//     } else if (string2.length > string1.length) {
//         return "second"
//     } else if (string1.length === string2.length) {
//         return "neither"
//     } else {
//         return false
//     }
// }
//
// console.log(whichStringIsLonger("bobby", "lou")); // returns first
// console.log(whichStringIsLonger("bob", "louise")); // returns second
// console.log(whichStringIsLonger("bob", "lou")); // returns neither
// console.log(whichStringIsLonger("bobby", 2)); // returns false
// console.log(whichStringIsLonger(1, "lou")); // returns false

// function convertLowHighToObject(array) {
//     array = array.sort()
//     return "low: " + array[0] + ", high: " + array[array.length - 1];
// }
//
// console.log(convertLowHighToObject([36, 87, 2]))

// function convertLowToObjectToo(x, y) {
//     if (x>y) {
//         return "low: " + y + ", high: " + x;
//     } else if (y>x) {
//         return "low: " + x + ", high: " + y;
//     } else {
//         return "both temperatures are equal";
//     }
// }
//
// console.log(convertLowToObjectToo(98, 2))
// console.log(convertLowToObjectToo(75, 75))
//
// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);

// if (true) {
//     let x = 5;
// }
// console.log(typeof x);

// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }
// const sayHello = (name) => { 'Hello, ' + name + '!' }
// const sayHello = name => { 'Hello, ' + name + '!' }
// const sayHello = (name) => `Hello, ${name}!`
// console.log(sayHello("Patrick"));


    //function to print occurrence of character
    // function printans( ans )
    // {
    //     for( let [ key ,value] of ans)
    // {
    //
    //     console.log(`${key} occurs ${value} times` );
    //
    // }
    //
    // }

    // function count occurrence of character
    // function count( str , outp_map )
    // {
    //     for( let i = 0 ;i < str.length ;i++)
    // {
    //
    //     let k = outp_map.get(str[i]);
    //     outp_map.set(str[i], k+1) ;
    //
    //
    // }
//calling print function
//         printans(outp_map);
//     }

    //function create map to count character
//     function countDuplicates( test , callback )
//     {
// //checking string is valid or not
//         if( test.length === 0 )
//     {
//         console.log(" empty string ");
//         return ;
//     }
//         else
//     {
//         // map for storing count values
//         let ans = new Map();
//         for( let i = 0 ;i < test.length;i++)
//     {
//         ans.set(test[i], 0);
//     }
//
//         callback( test ,ans);
//
//     }
//
//     }

    // test string
//     let test = "helloworld";
// countDuplicates( test ,count);
//
// function duplicatesCounted(str) {
//     let letterCountObject = {};
//     let count = 1;
//     for (let i = 0; i < str.length; i++) {
//         if (!(str[i] in letterCountObject)) {
//             letterCountObject[str[i]] = count;
//         } else {
//             letterCountObject[str[i]] = letterCountObject[str[i]] + 1;
//         }
//     }
//     return letterCountObject
// }
//
// console.log(duplicatesCounted('hello world'))

function makePerson(personName, age) {
   if (personName.length >= 1) {
       if (age > 150 || age < 1) {
           console.log("Person must be between the age of 1 and 150");
           return false;
       } else {
           return {personName: personName, age: age};
       }
   } else {
       console.log("Person name must be at least 1 letter long")
       return false;
   }
}

console.log(makePerson("Bob", 30))
console.log(makePerson("", 75))
console.log(makePerson("John", 151))