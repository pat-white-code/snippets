const digitCount = require('./digitCount');
const mostDigits = (nums) => {
  let maxDigits = 0;
  for(let i = 0; i < nums.length ; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits;
}

module.exports = mostDigits;