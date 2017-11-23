const callFunctionBigger = (func, num1, num2, count=0) => {
  const biggerNum = Math.max(num1, num2);
  if (count === biggerNum) return count;
  func(count);
  return callFunctionBigger(func, num1, num2, count+1);
};

module.exports = callFunctionBigger;