/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
templesElement.innerHTML = '';

    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }

}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    let sortByElement = document.getElementById("sortBy");
    let filter = sortByElement.value;

    switch(filter){
        case "utah":
            let filteredList = temples.filter((temple) => temple.location.includes('Utah'));
            displayTemples(filteredList);
            break;
        case "notutah":
            let filteredList1 = temples.filter((temple) => !temple.location.includes('Utah'));
            displayTemples(filteredList1);
            break;
        case "older":
            let filteredList2 = temples.filter((temple) => 
            {
                const dateComponents = temple.dedicated.split(", ");

                // Convert month name to month number (0-indexed)
                const monthName = dateComponents[1];
                const monthNumber = new Date(Date.parse(`${monthName} 1, 2000`)).getMonth();

                // Extract year, month, and day
                const year = parseInt(dateComponents[0]);
                const day = parseInt(dateComponents[2]);

                // Create a Date object
                const date = new Date(year, monthNumber, day);

                return date < new Date(1950, 0, 1);
            });
            
            displayTemples(filteredList2);
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
            break;
    }
}


getTemples();

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => {
    sortBy(templeList);
});