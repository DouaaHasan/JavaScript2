"use strict";

function createBase(num) {
  // Put here your logic...
  return function func(num2) {
    console.log(num + num2)
  };
}

const addSix = createBase(6);
// function addSix(num) {
//   return createBase(6)(num);
// }

// Put here your function calls...
addSix(9);
addSix(18);
addSix(30);