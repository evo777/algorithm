const nStr = (str, num, i=1, result="") => {
  if (i === num) return result + str;
  result += str + " ";
  return nStr(str, num, i+1, result);
};

module.exports = nStr;
