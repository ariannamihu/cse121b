/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Arianna Mihu';
let currentYear = new Date().getFullYear();
var profilePicture = 'images/sunflowers_2023-7.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
var name = "Arianna";


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${name}`);


/* Step 5 - Array */

let favoriteFoods = ["Sushi", "Mashed Potatoes", "Tacos", "Chicken Nuggets"];
foodElement.innerHTML = favoriteFoods;
let singleFood = "Pizza";

favoriteFoods.push(singleFood); 
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

