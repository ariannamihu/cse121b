/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    let difference = subtract(subtractNumber1, subtractNumber2);

    // Set the result in the #difference element
    document.querySelector('#difference').value = difference;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    let product = multiply(multiplyNumber1, multiplyNumber2);

    // Set the result in the #difference element
    document.querySelector('#product').value = product;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}

function divideNumbers(){
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
const date = new Date();

let year = date.getFullYear();

document.querySelector('#year').textContent = year

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector('#array').textContent = numbersArray
/* Output Odds Only Array */
let odds = numbersArray.filter((num) => num % 2 === 1);
document.querySelector('#odds').textContent = odds
/* Output Evens Only Array */
let evens = numbersArray.filter((num) => num % 2 === 0);
document.querySelector('#evens').textContent = evens
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').textContent = sumOfArray
/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number *2);
document.querySelector('#multiplied').textContent = multiplied
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplied.reduce((sum, number) => sum +number);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied