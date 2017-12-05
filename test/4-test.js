const solution = require('../solutions/4.js');

const test = (string, num, expected) => {
  solution(string, num).split(" ").length === expected ? console.log("Test passed") : console.log("Test failed");
};

test("Hello", 4, 4);
test("Hi", 1, 1);
test("World", 5, 5);