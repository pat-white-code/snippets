const digitCount = (num) => {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = digitCount;