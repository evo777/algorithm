const callX2 = (func, n, i = 1) => {
  if (i <= n) func(i) + callX2(func, n, i + 1);
};

module.exports = callX2;