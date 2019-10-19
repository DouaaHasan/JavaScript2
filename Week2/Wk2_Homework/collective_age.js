const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

const ages = hackYourFutureMembers.map(member => member.age);

const calculateTotalAges = (arr, callBack) => {
  const totalAges = callBack(arr);
  console.log(`The collective age of the HYF team is: ${totalAges}`);
  return totalAges;
}

const calculateTotal = arr => {
  let sum = 0;
  arr.map(value => sum += value)
  return sum
}

console.log(calculateTotalAges(ages, calculateTotal));




