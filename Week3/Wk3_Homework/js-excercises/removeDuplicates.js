"use strict";


const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

const rm = arr => arr.filter((value, index) => arr.indexOf(value) === index)
console.log(rm(letters));

// let unique = [...new Set(letters)];
// console.log(unique);