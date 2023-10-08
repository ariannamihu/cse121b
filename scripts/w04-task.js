/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Arianna Mihu",
    photo: "images/sunflowers_2023-7.jpg",
    favoriteFoods: ["Sushi", "Mashed Potatoes", "Tacos", "Chicken Nuggets"],
    hobbies: ['Running', 'Pickleball', 'Piano', 'Guitar', 'Photography'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Cedar Hills, UT',
        length: '18 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Rexburg, ID',
        length: '2 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
})

/* Places Lived DataList */
var placesLived = document.getElementById("places-lived");
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement('dt')
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd')
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);

})

