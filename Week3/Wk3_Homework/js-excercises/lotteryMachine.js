'use strict';
/*

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
*/

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  // The function should first generate an array containing values from start value to end value (inclusive).
  const arrayLength = stopIndex - startIndex;
  for (let index = startIndex; index < arrayLength; index++) {
    numbers.push(index);
  }
  console.log(numbers);
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  // Then the function should take the newly created array and iterate over it,
  numbers.forEach(value => {
    // Both functions should be called if the array value is divisible by both 3 and 5.
    if (value % 15 === 0) {
      threeCallback();
      fiveCallback();
    } // and calling the first callback if the array value is divisible by 3.
    else if (value % 3 === 0) {
      threeCallback(value);
    } // // The function should call the second callback if the array value is divisible by 5.
    else if (value % 5 === 0) {
      fiveCallback(value);
    }
  });
}

const sayThree = num => console.log(`${num} is dividable by 3`);
const sayFive = num => console.log(`${num} is dividable by 5`);

threeFive(10, 15, sayThree, sayFive);
