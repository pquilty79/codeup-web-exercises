function count(input) {
    if (input == null) {
        console.log("Null value entered");
    } else if (typeof input !== "string") {
        input = input.toString()
        let inputLength = input.length
        console.log(inputLength)
    } else {
        var inputLength = input.length
        console.log(inputLength)
    }
    let expectedReturn = 7
    console.log(expectedReturn === inputLength, isNaN(NaN), typeof input !== "boolean")
}



count("droople")
count(7)
count(true)
count(null)
