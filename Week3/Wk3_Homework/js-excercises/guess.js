'use strict';

// Snippet

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// the result will be alerted as: 12
// that's because of the possibility of changing the value of the variable (a) since it's initialized using (let) which allows to reassign the variable with other values ahead. Thus, this is what happened in the invoked function assigned to the (x function) which was called eventually.
