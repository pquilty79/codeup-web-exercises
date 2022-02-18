(function showMultiplicationTable(number) {
    for (var i = 0; i <=10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
})(7);


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function isEven(number) {
    if (typeof number == "boolean") {
        return false;
    } else if (number % 2 === 0) {
        return (number + " is even");
    } else {
        return (number + " is odd");
    }
}

function forRandomEven(min, max, times) {
    for (var i = 0; i <= times; i++) {
        console.log(isEven(getRandomInteger(min, max)))
    }
}
forRandomEven(20, 200, 10);


for(let i = 0; ++i < 10;) {
    console.log((''+i).repeat(i))
}

for (let i = 100; i > 0; i = i - 5) {
    console.log(i)
}
