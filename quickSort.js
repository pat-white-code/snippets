const pivotHelper = require('./pivotHelper');

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if(start < end) {
    let mid = pivotHelper(arr, start, end);
    console.log('MID', mid);
    // left
    quickSort(arr, start, mid - 1);
    // right
    quickSort(arr, mid + 1, end);
  }
  return arr;
}

let arr = [0, 2, 1, 4, 3]

console.log(quickSort(arr));