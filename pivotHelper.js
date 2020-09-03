const swap = require('./swap');

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  // identify the first element in the arry
  // loop through the rest of the arry,
  // if pivot is greater than current item, increment pivot index, and the item at current index with item at current pivotIndex
  let pivot = arr[start];
  let swapIndex = start;
  for(let i = start + 1 ; i <= end; i++) {
    let current = arr[i];
    if(pivot > current) {
      swapIndex ++;
      // swap item at current with item at pivotIndex;
      swap(arr, i, swapIndex)
    }
  }
  // swap pivot with item at arr[pivotIndex];
  swap(arr, start, swapIndex)
  return swapIndex;
}

module.exports = pivotHelper;