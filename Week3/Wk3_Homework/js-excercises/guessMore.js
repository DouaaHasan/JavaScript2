'use strict';

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); // Output: 9 because we consol log x, which initialized by (const) which doesn't allow reassigning the variable for the type number

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); // Output: {x:10}, because (const) in object type stores a reference to the object not the values for its keys. thus any change to those values will update their state to the latest.
