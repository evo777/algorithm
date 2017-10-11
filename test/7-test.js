const getHighestDivsor = require('../solutions/7.js');

const test = (num, result) => {
  getHighestDivsor(num) === result ? console.log('Test passed') : console.log('Test failed');
};

test(10, 5);
test(15, 5);
test(40, 20);
