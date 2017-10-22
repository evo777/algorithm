/*

Write a function that gets the highest
divisor that is not itself.

*/

const getHighestDivsor = (num, i = 1, max = 1) => {
  if (i === num) return max;
  if (num % i === 0 && max <= i) max = i;
  return getHighestDivsor(num, i + 1, max);
};

module.exports = getHighestDivsor;
