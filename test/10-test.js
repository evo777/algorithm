const solution = require('../solutions/10.js');

const test = (func, expected, num1, num2) => {
  const testing = solution(func, num1, num2);
  testing === expected ? console.log('Test passed') : console.log('Test failed');
};

const f = (num) => {
  return num;
};

test(f, 4, 0, 4);
test(f, 2, 1, 2);