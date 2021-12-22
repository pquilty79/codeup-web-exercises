(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // var names  = {
    //     firstName: "Patrick",
    //     middleName: "William",
    //     lastName: "Quilty"
    // };
    // console.log(names.firstName);
    // console.log(names.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // names.sayHello = function () {
    //     return("Hello, from " + names.firstName + " " + names.lastName + "!");
    // }
    // console.log(names.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

// var shoppers = [
//     {name: 'Cameron', amount: 180},
//     {name: 'Ryan', amount: 250},
//     {name: 'George', amount: 320}
// ];
//
// shoppers.forEach(function(shopper) {
//         if (shopper.amount > 200) {
//             shopper.discount = (shopper.amount * .88);
//             shopper.discount = shopper.discount.toFixed(2)
//             console.log(shopper.name + " owes a total of $" + shopper.discount + ", this shopper received as 12% discount.");
//         } else {
//             shopper.amount = shopper.amount.toFixed(2)
//             console.log(shopper.name + " owes a total of $" + shopper.amount + ", this shopper did not receive a discount.");
//         }
//     });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var books = [
    //     {
    //         title: "Salmon of Doubt",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "The Hitchhiker's Guide to the Galaxy",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //     title: "Life, the Universe, and Everything",
    //     author: {
    //     firstName: "Douglas",
    //         lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "The Restaurant at the End of the Universe",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "So Long and Thanks for All the Fish!",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "Mostly Harmless",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "Dirk Gently's Holistic Detective Agency",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "The Long Dark Tea-Time of the Soul",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "Last Chance to See",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "The Meaning of Liff",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "The Deeper meaning of Liff",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    // ];
    //

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function (book){
    //     console.log("Book # " + (books.indexOf(book) + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    // })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    const books = []
    books.forEach(function(book, index){
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author:" + book.author.firstName + " " + book.author.lastName);
    });
    let createBook = function (title, authorFirstName, authorLastName){
        let book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = authorFirstName;
        book.author.lastName = authorLastName;
        return book;
    };

    let showBookInfo = function(book, index){
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    };
    books.push(createBook("The Screwtape Letters", "C.S.", "Lewis"));
    books.push(createBook("Good Omens", "Neil", "Gaiman" ))
    books.push(createBook("The Lord of the Rings", "J.R.R.", "Tolkien" ))
    books.forEach(showBookInfo);


})();