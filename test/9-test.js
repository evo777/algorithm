const solution = require('../solutions/9.js');

const test = (num1, num2, expected) => {
  solution(num1, num2) === expected ? console.log(`GCD is: ${expected}`) : console.log('Test failed');
};

test(7, 14, 7);
test(1, 15, 1);
test(6, 12, 6);
