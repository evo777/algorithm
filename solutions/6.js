const callX2 = (func, n, i = 1) => {
  if (i < n + 1) func(i) + callX2(func, n, i + 1);
};

module.exports = callX2;