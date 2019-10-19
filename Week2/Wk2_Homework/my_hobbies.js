const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

// Write a program that outputs each of these inside an HTML file
// Create an HTML and JavaScript file, link them together
// Use the map and/or forEach function to put each hobby into a list item
const ul = document.createElement('ul');
myHobbies.map(value => {
  let li = document.createElement('li');
  li.innerText = value;
  // Output the list items in an unordered list
  ul.appendChild(li);
})
document.body.appendChild(ul);


