export function qs(selector) {
    return document.querySelector(selector);
  }

export function calculateTip() {
    let amount = document.querySelector('#amount').value;
    let service = document.querySelector('#services').value;

    let total = (amount * service); 

    document.querySelector('.tip').style.display = 'block'; 
    document.querySelector('#total').value = total;
}
