"use strict"




// let i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i = i * 2
// }


var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones)
var customerCones
function giveCones () {
    customerCones = Math.floor(Math.random() * 5) + 1;
    return customerCones;
}


do {
    giveCones()
    if (allCones >= customerCones) {
    console.log(customerCones + " cones sold...")
    allCones = allCones - customerCones;
} else {
        console.log("Cannot sell you " + customerCones + " I only have " + allCones + "...")
    }} while (allCones > 0);
console.log("Yah! I sold them all!")