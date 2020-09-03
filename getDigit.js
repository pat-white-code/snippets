// helper function for radix function
// given an integer and a power of 10, return the digit at that power.
// If that digit does not exist, return 0.

// For example, 
// getDigit(104, 0) => 4
// getDigit(75, 1) => 7
// getDigit(441, 3) => 0

// const getDigit = (num, pow) => {
//   let divided = (num / Math.pow(10, pow));
//   let floored = Math.floor(divided);
//   let stringed = floored.toString();
//   let digit = stringed[stringed.length - 1];
//   return digit;
// }

// const getDigit = (num, pow) => {
//   let str = Math.floor(num / Math.pow(10, pow)).toString();
//   return str[str.length - 1];
// }

// "Stack Overflow" Solution:
const getDigit = (num, pow) => {
  // Math.abs(num) means negative numbers will not distort the intended output.
  // % 10 will always return the digit in the singles column in base 10 numbers.
  return Math.floor(Math.abs(num) / Math.pow(10, pow)) % 10
}

module.exports = getDigit;