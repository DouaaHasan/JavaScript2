'use strict';
// When the button is clicked a calculation is made and the user can read the tip amount underneath.
const calcBtn = document.getElementById('calcBtn');
calcBtn.addEventListener('click', e => {
  // clearing the tip field to update the new calculation
  const tipHeader = document.getElementById('tip');
  tipHeader.innerText = '$';

  e.preventDefault(); // Prevent the button from submitting the form

  // The amount of the bill
  const billAmount = document.getElementById('bill').value;

  // How many people will share the bill
  const pplAmount = document.getElementById('ppl').value;

  // If there's only 1 person who shares the bill, output only the tip amount (omit the "each")
  if (pplAmount === '1') {
    document.getElementById('each').innerText = '';
  }

  // How good the service was
  const service = document.getElementById('service').value;
  let tipAmount;

  // calculating the service
  if (service !== 'default') {
    switch (service) {
      case '30%':
        tipAmount = (billAmount * 30) / 100;
        break;
      case '20%':
        tipAmount = (billAmount * 20) / 100;
        break;
      case '15%':
        tipAmount = (billAmount * 15) / 100;
        break;
      case '10%':
        tipAmount = (billAmount * 10) / 100;
        break;
      case '5%':
        tipAmount = (billAmount * 5) / 100;
        break;
      default:
        tipAmount;
    }
  }

  // validation // If any of the input fields are empty when the button is clicked, call an alert that says: "You need to fill in all the fields!"

  if (
    billAmount.trim() === '' ||
    pplAmount === '' ||
    billAmount.trim() === '0' ||
    pplAmount === '0' ||
    service === 'default'
  ) {
    alert(
      'pleas be sure to have the inputs filled & to select the service quality in order to get the calculated tips amount',
    );
  }

  // append the result
  const tip = tipAmount / pplAmount;
  if (tip) tipHeader.innerText += ` ${tip.toFixed(2)}`;

  // clear fields
  document.getElementById('bill').value = '';
  document.getElementById('service').value = 'default';
  document.getElementById('ppl').value = '';
});
