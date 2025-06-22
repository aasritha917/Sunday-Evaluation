const boxen = require('boxen');

const title = " Hurray!!! ";
const message = "I am using my first external module!";

const boxClassic = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: 'classic'
});

const boxDouble = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: 'singleDouble'
});

const boxRound = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: 'round'
});

console.log(boxClassic);
console.log(boxDouble);
console.log(boxRound);
