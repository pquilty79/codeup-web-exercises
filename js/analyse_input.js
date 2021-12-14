
 function analyseInput(){
    let userInput = prompt("Give me a number or a string");
     if (isNaN(parseInt(userInput)) === false) {
         if (userInput % 2 === 0) {
             console.log(userInput + " is an even number.")
            } else {
             console.log(userInput + " is an odd number.")
         } if (userInput > 0) {
             console.log(userInput + " is a positive number")
            } else if (userInput < 0) {
             console.log(userInput + " is a negative number")
            } else {
             console.log("Zero is neither positive nor negative")
         }
     } else {
         if (userInput.length === 1) {
             const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
             if (vowels.includes(userInput)) {
                 console.log(userInput + " is a vowel.")
             } else {
                 console.log(userInput + " is a consonant.")
             }
         } else {
             console.log(userInput + " is " + userInput.length + " characters long");
         }
     }
 }
analyseInput()
