// exercises section 1
var a = 1;
console.log(a)
var b = a++;
console.log(b)
var c = ++a;
console.log(c)
// what is the value of a, b, and c?

var d = "hello";
var e = false;

console.log(d++);
console.log(e++);

var perplexed;
// perplexed is undefined (no value is assigned)
console.log(perplexed + 2);

var priceOne = 2.7;
console.log(priceOne.toFixed(2));

// var price = "2.7";
// console.log(price.toFixed(2));
// throws an error because it is already a string

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);

console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1);

console.log(!!"hello");

console.log(!!"");

console.log(!!'');

console.log(!!"false");

console.log(!!"0");

// exercises section 2
var sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toUpperCase());
sample = sample + " Students";
console.log(sample);
sample = sample.replace("Students", "Class");
console.log(sample)
console.log(sample.indexOf("c")); //this does not make sense to me
console.log(sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"),sample.indexOf("p") + 1));

// exercises section 3
var littleMermaid = 3, brotherBear = 5, hercules = 1;
var movies = [littleMermaid, brotherBear, hercules]
var price = 3 * movies.reduce((a, b) => a + b, 0)
console.log("$" + price)

var googleWage = 400, amazonWage = 380, facebookWage = 350;
var googleHours = 6, amazonHours = 4, facebookHours = 10;
salary = (googleWage * googleHours) + (amazonWage * amazonHours) + (facebookWage * facebookHours);
console.log("$" + salary);

var isFull = false;
var doesConflict = false;
if ((isFull === true) || (doesConflict === true)) {
    console.log("Student Cannot Enroll");
} else {
    console.log("Student Can Enroll");
}

var premiumMember = false
var numberOfItems = 3
var hasExpired = false
if (premiumMember === true) {
    if (hasExpired === true) {
        console.log("Offer cannot be applied")
    } else
        console.log("Offer can be applied")
} else {
    if  ((hasExpired === false) && (numberOfItems > 2)) {
        console.log("Offer can be applied")
    } else {
        console.log("Offer cannot be applied")
    }
}

// exercises section 4

var username = 'codeup';
var password = 'notastrongpassword';
var condOne = password.length >= 5;
var condTwo = password.includes(username);
var condThree = username.length <= 20;
function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
}
var condFour = hasWhiteSpace(username) || hasWhiteSpace(password)
var isValid= [condOne, condTwo, condThree, condFour];
console.log(isValid);







