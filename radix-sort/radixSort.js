const mostDigits = require('./mostDigits');
const getDigit = require('./getDigit');

// const radixSort = (nums) => {
//   let maxDigits = mostDigits(nums);
//   // console.log('MAX DIGITS', maxDigits);
//   3
//   for(let k = 0 ; k <= maxDigits ; k++) {
//     // 0123456789
//     let buckets = [[], [], [], [], [], [], [], [], [], []];
//     for(let i = 0; i < nums.length ; i++) {
//       let current = nums[i];
//       let digit = getDigit(current, k);
//       buckets[digit].push(current);
//     }
//     // console.log('BUCKETS', buckets);
//     nums = buckets[0].concat(buckets[1], buckets[2], buckets[3], buckets[4], buckets[5], buckets[6], buckets[7], buckets[8], buckets[9]);
//   }
//   return nums;
// }

const radixSort = (nums) => {
  let maxDigits = mostDigits(nums);
  for(let k = 0 ; k <= maxDigits ; k++) {
    // 0123456789
    let buckets = Array.from({length: 10}, ()=> []);
    for(let i = 0; i < nums.length ; i++) {
      let current = nums[i];
      let digit = getDigit(current, k);
      buckets[digit].push(current);
    }
    nums = [].concat(...buckets);
  } 
  return nums;
}

console.log(radixSort([402, 412, 43, 909, 5, 1000, 7]));

module.exports = radixSort;