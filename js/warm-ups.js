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


(function isMultipleOfThree() {
        let input = parseFloat(prompt("Give me a number."));
        if (isNaN(input)) {
            alert("This is not a number")
        } else if (input % 3 === 0) {
            alert(input + " is a multiple of three")
        } else {
            alert(input + " is not a multiple of three")
        }
    }
)();

let i = 2;
while (i < 25) {
    console.log(i);
    i = i + 2
}