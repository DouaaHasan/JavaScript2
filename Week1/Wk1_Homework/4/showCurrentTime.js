"use strict";

function displayTime() {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();

  document.getElementById("displayTime").textContent = h + ":" + m + ":" + s;
}

window.onload = setInterval(displayTime, 1000);
