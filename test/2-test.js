const solution = require('../solutions/2.js');

const test = (num1, num2, num3, expected) => {
  solution(num1, num2, num3) === expected ? console.log('Test passed') : console.log('Test failed');
};

test(1,2,3,3);
test(5,2,3,5);
