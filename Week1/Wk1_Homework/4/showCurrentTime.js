"use strict";

function displayTime() {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();

  document.getElementById("displayTime").textContent = `${format(h)}:${format(m)}:${format(s)}`;
}

function format(n) {
  return n > 9 ? n : `0${n}`;
}

window.onload = setInterval(displayTime, 1000);
