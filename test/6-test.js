const solution = require('../solutions/6.js');

const test = (num) => {
  let count = 0;
  const f = i => {
    count++;
  };

  solution(test, num);

  count === num ? console.log('Test passed') : console.log('Test failed');
};

test(f, 5);
test(f, 6);
test(f, 1);
