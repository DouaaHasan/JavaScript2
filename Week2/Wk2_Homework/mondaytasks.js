"use strict";

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

const ratesPerHour = mondayTasks.map(task => task.duration / 60 * hourlyRate);

const ratesSum = ratesPerHour.reduce((acc, value) => {
  return acc + value;
});
console.log(`€${ratesSum}`);
