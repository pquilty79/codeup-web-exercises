"use strict";


function doesQualify(creditScore, cashOnHand) {
    if (creditScore > 680 && cashOnHand >= 4000) {
        console.log("This client qualifies with good credit.");
    } else if (creditScore <= 680 && cashOnHand >= 10000) {
        console.log("This client qualifies with a large down payment.");
    } else {
        console.log("This client has been rejected. You want to avoid sending the repo man.")
    }
}

doesQualify(590, 12000);
doesQualify(720, 5000);
doesQualify(720, 3000);
doesQualify(590,9000);

