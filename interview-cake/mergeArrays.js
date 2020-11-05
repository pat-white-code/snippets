// https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation

// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

//   const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

const mergeArrays = (leftArr, rightArr) => {
  //                                       i
  // const myArray = [3, 4, 6, 10, 11, 15];
  //                                       j
  // const alicesArray = [1, 5, 8, 12, 14, 19, 20];
  let i=0, j = 0;
  let output = []
  while(i < leftArr.length && j < rightArr.length) {
    let left = leftArr[i]
    let right = rightArr[j]
    if(left < right) {
      output.push(left)
      i++
    } else {
      output.push(right)
      j++
    }
  }
  if(i < leftArr.length) {
    let slice = leftArr.slice(i)
    output = output.concat(slice)
  }
  if(j < rightArr.length) {
    let slice = rightArr.slice(j)
    output = output.concat(slice)
  }
  return output;
}

module.exports = { mergeArrays }

// function mergeArrays(myArray, alicesArray) {

//   // Set up our mergedArray
//   const mergedArray = [];

//   let currentIndexAlices = 0;
//   let currentIndexMine = 0;
//   let currentIndexMerged = 0;

//   while (currentIndexMerged < (myArray.length + alicesArray.length)) {

//     const isMyArrayExhausted = currentIndexMine >= myArray.length;
//     const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

//     // Case: next comes from my array
//     // My array must not be exhausted, and EITHER:
//     // 1) Alice's array IS exhausted, or
//     // 2) The current element in my array is less
//     //    than the current element in Alice's array
//     if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
//       (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

//       mergedArray[currentIndexMerged] = myArray[currentIndexMine];
//       currentIndexMine++;

//       // Case: next comes from Alice's array
//     } else {
//       mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
//       currentIndexAlices++;
//     }

//     currentIndexMerged++;
//   }

//   return mergedArray;
// }