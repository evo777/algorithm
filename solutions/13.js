const customInterval = (func, second, n=0) => {
  if (n >= second) return;
  setTimeout(() => {
    func();
    customInterval(func, second, n+1);
  }, 1000);
};

module.exports = customInterval;