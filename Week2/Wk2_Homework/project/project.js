"use strict";

// A user can specify how many minutes the timer should be set,
let userInput = document.getElementById('input');
let userMinutes = parseInt(userInput.value);
let userSeconds = userMinutes * 60;
// update minutes
// add minute
let plusMin = document.getElementById('plusMin')
plusMin.addEventListener('click', () => { // works only in the console
  userMinutes++;
  console.log(userMinutes);
})
// subtract minute
let minusMin = document.getElementById('minusMin')
minusMin.addEventListener('click', () => { // works only in the console
  userMinutes--
  console.log(userMinutes);
})

// display timer
let timer = document.getElementById("displayContainer");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
// 
function showTimer(minutes, seconds) {
  min.innerText = minutes > 9 ? minutes : `0${minutes}`
  sec.innerText = seconds > 9 ? seconds : `0${seconds}`;
}
let minute = 60; // to be shown in showTimer() once minutes > 1 instead of secondes which will be above 60

// with a click on the play button it starts counting down! ==> global variables to be accessible in multiple functions
// play button
let playBtn = document.getElementById("playBtn");
let isCountingDown = false;
!isCountingDown ? showTimer(25, 0) : showTimer(userMinutes, userSeconds)
// showTimer(userMinutes, userSeconds)
// with a click on the play button
playBtn.addEventListener('click', () => {
  isCountingDown = true;
})

//  the user wants to pause the timer, they can do so by clicking the pause button.
// pause button
let pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener('click', () => {
  isCountingDown = false;
})

// interval per sec:
let interval = setInterval(() => {

  if (isCountingDown) {
    if (userSeconds !== 0 && minute !== 0) {
      if (userMinutes >= 1) {
        showTimer(userMinutes - 1, (minute -= 1));
        if (minute === 0) {
          minute = 59;
          userMinutes -= 1;
        }
      } else {
        showTimer(userMinutes, userSeconds)
      }
    } else {
      clearInterval(interval)
      timer.innerText = "Times is up!"
    }
  }
  userSeconds--;

}, 1000);