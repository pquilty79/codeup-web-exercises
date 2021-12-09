// console.log("Node is working!");
// console.log("hello, sweet asteroid!");
// console.log("One of my favorite foods is " + favoriteFood + " They are best when they are fried very crispy. I love to make different sauces to you can have them so many different ways." + " My wife and daughter like them milder than I do, but I prefer them extra hot!")

var favoriteFood = "buffalo wings";
var phraseOne = "\tMy \n\t\tfavorite \n\t\t\tfood \n\t\t\t\tis \n\t\t\t\t\t";
console.log(phraseOne + favoriteFood)

// "\t" creates a tab and "\n" creates a new line

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log("The string is found in the sentence: " + sentence.includes(word).toString().toUpperCase());

let greeting = "Hello, "
greeting += "Clarice..."
console.log(greeting)

console.log(22 / 7);
// cuts off at 16 places

let numStr = "7.99";
let discount = .10;
let numAmount = parseFloat(numStr)
let discAmount = numAmount - (numAmount * discount);
console.log(parseFloat(discAmount.toFixed(2)))
// gives whole number
// console.log(Math.round(discAmount));
// parseInt always rounds down



