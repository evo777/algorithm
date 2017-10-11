/*

Write a function that checks if the number is a prime number.

*/


const isPrime = (num, i=2) => {
  if (num < 0) return false;
  if (num === 0 || num === 1) return false;
  if (i === num && num % i === 0) return true;
  if (num % i === 0) return false;
  return isPrime(num, i+1);
};

module.exports = isPrime;
