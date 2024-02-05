function halfNumber(number) {
    const result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
    return result;
}

function squareNumber(number) {
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
}

function percentOf(number1, number2) {
    const percentage = (number1 / number2) * 100;
    console.log(`${number1} is ${percentage}% of ${number2}.`);
    return percentage;
}

function findModulus(number1, number2) {
    const modulus = number1 % number2;
    console.log(`${modulus} is the modulus of ${number1} and ${number2}.`);
    return modulus;
}


