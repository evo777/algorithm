const callX2 = (func, n, i = 1) => {
  if (i === n) return func(n);
  func(i);
  return callX2(func, n, i + 1);
};

module.exports = callX2;