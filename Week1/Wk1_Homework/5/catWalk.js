"use strict";

// 2. Create a variable to store a reference to the img.
let myCat = document.querySelector("img");

// 3. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
let initialPosition = 0;
myCat.style.left = `${initialPosition}px`;

let interval;
let currentPosition = 0;
let dancing = true;
const timeOut = 5000;
// 4. Create a function called catWalk()
const catWalk = () => {
  //  that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
  currentPosition += 10;
  myCat.style.left = `${currentPosition}px`;

  // 6. cat reaches the right-hand of the screen, restart them at the left. So they should keep walking forever ever.
  if (currentPosition > window.innerWidth - myCat.width) {
    myCat.style.left = `${initialPosition}px`;
    dancing = true;
    currentPosition = 0;
  }

  // 7. cat reaches the middle, replace the img with a cat dancing (use this URL: https://tenor.com/StFI.gif),
  const midScreen = (window.innerWidth - myCat.width) / 2;

  if (dancing && currentPosition >= midScreen) {
    clearInterval(interval);
    // cat dancing
    myCat.src = "https://media3.giphy.com/media/WXB88TeARFVvi/giphy.gif";
    // keep it dancing for 5 seconds
    setTimeout(() => {
      //and then replace the img with the original
      myCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
      dancing = false;
      // have it continue the walk.
      interval = setInterval(catWalk, 50);
    }, timeOut);
  }
};

interval = setInterval(catWalk, 50);
