'use strict'

const myNumbers = [1, 2, 3, 4];
const filtered = myNumbers.filter(number => number % 2 === 0);
const doubleEvenNumbers = filtered.map(number => number * 2);
console.log(doubleEvenNumbers);








