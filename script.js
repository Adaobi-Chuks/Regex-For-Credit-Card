const prompt = require("prompt-sync")({sigint: true});

function validateCard(cardNumber) {
    const mastercardMatch = /^(?:5[1-5]\d{14})|(?:(?:222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)\d{12})$/;
    const visaMatch = /^4(?:\d{12,15})$/;

    if (mastercardMatch.test(cardNumber)) {
        return "Master";
    } else if (visaMatch.test(cardNumber)) {
        return "Visa";
    } else {
        return "invalid";
    }
}

function hideCard(cardNumber) {
    const lengthOfX = cardNumber.toString().length-4;
    return cardNumber.toString().replace(/\S+(\S{4})$/, "X".repeat(lengthOfX) +"$1");
}

function manageValidation() {
    console.log();
    const name = prompt("Please input your name: ");
    console.log(`\nWelcome ${name.toUpperCase()}\n`);
    const cardNumber = prompt("Input your Credit Card Number: ");
    if(validateCard(cardNumber) === "invalid") {
        console.log(`\nYour Credit Card Number ${hideCard(cardNumber)} is invalid\n`)
    } else {
        console.log(`\nYour card is a ${validateCard(cardNumber)} Card and your card number ${hideCard(cardNumber)} is valid\n`)
    }
}

manageValidation();
