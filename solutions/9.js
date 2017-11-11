/*

 Write a function that finds the greatest common denominator

 */

const gcd = (num1, num2, i = 1, result=1) => {
  const min = Math.max(num1, num2);
  if (i >= min) return result;
  if (num1 % i === 0 && num2 % i === 0 && result <= i) result = i;
  return gcd(num1, num2, i+1, result);
};

module.exports = gcd;
