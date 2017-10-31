const callX2 = require('../solutions/13.js');


const test = (num) => {
  let count = 0;
  let boolean = true;

  const func = testNum => {
    count += 1;
    if (count !== testNum) boolean = false;
  };

  callX2(func, num);
  boolean && num === count ? console.log('Test passed') : console.log('Test failed');
};

test(5);
test(3);
test(10);