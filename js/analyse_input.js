
 function anaylseInput(){
    var userInput = prompt("Give me a number or a string");
     if (isNaN(parseInt(userInput)) === false) {
         if (userInput % 2 === 0) {
             alert(userInput + " is an even number.")
            } else {
             alert(userInput + " is an odd number.")
         } if (userInput > 0) {
             alert(userInput + " is a positive number")
            } else if (userInput < 0) {
             alert(userInput + " is a negative number")
            } else {
             alert("Zero is neither positive nor negative")
         }
     } else {
         if (userInput.length === 1) {
             const vowels = ["a", "e", "i", "o", "u"];
             if (vowels.includes(userInput)) {
                 alert(userInput + " is a vowel.")
             } else {
                 alert(userInput + " is a consonant.")
             }
         } else {
             alert(userInput + " is " + userInput.length + " characters long");
         }
     }
 };
anaylseInput()