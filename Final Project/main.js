

import {calculateTip} from "./calculations.js";

document.querySelector('#calculate').addEventListener("click", calculateTip);

let tipAmount = document.getElementById("total");
let addToReceiptButton = document.getElementById("add-to-receipt")

let receiptList = document.getElementById("receipt-list");
let allTips = [];

function addToReceipt() {
    receiptList.innerHTML = "";
    let tip = Number(tipAmount.value);
    if (tip != 0) {
        // tipAmount.value = "";
        allTips.push(tip);
        let formattedTips = allTips.map(formatReceipt);
        formattedTips.forEach((formattedTip) => {
            const li = document.createElement("li");
            li.textContent = formattedTip;
            receiptList.appendChild(li);
        })
    }
}

function formatReceipt(num) {
    return `\$${num.toFixed(2)}`
}
addToReceiptButton.addEventListener("click", addToReceipt);


function getFoodImage() {
    fetch("https://foodish-api.herokuapp.com/api/images/biryani").then((result) => {
        let imageElement = getElementById("foodImage");
        imageElement.innerHTML = result;
    })
}
// this function was blocked by cors and I couldn't figure out how to fix that
// getFoodImage();