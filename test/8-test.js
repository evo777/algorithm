const isPrime = require('../solutions/8.js');

const test = (num) => {
  isPrime(num) ? console.log(`Test passed because ${num} is a prime`) : console.log(`Test failed because ${num} is not a prime`);
};

test(2);
test(21);
test(100);
test(71);
