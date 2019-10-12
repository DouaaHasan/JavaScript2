"use strict";

// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// (In the JavaScript) Replace each of the spans (nickname, fav-food, hometown) with your own information.
const nickName = document.getElementById("nickname");
nickName.textContent = "Dua";
const favFood = document.getElementById("fav-food");
favFood.textContent = "Lasagna";
const homeTown = document.getElementById("hometown");
homeTown.textContent = "Damascus";

// Iterate through each li and change the class to "list-item".
const personalInfo = document.querySelectorAll("li");

for (let element of personalInfo) {
  element.className = "list-item";
}
// for (let i = 0; i < personalInfo.length; i++) {
//   personalInfo[i].className = 'list-item';
// }

// (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const myImg = document.createElement("img");
myImg.src = "./imgs/d.jpg";
myImg.height = 200;
document.body.appendChild(myImg);
