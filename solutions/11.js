const nextDiv7 = (num, i=num+1) => {
  if (i % 7 === 0) return i;
  return nextDiv7(num, i+1);
};