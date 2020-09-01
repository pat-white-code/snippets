const pivot = (startIndex, arr) => {
  // identify the first element in the arry
  // loop through the rest of the arry,
  // if pivot is greater than current item, increment pivot index, and the item at current index with item at current pivotIndex
  let pivot = arr[startIndex];
  let end = arr.length - 1;
  let pivotIndex = 0;
  for(let i = 1 ; i < arr.length ; i++) {
    let current = arr[i];
    if(pivot > current) {
      pivotIndex ++;
      // swap item at current with item at pivotIndex;
      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  // swap pivot with item at arr[pivotIndex];
  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[startIndex];
  arr[startIndex] = temp;
  return pivotIndex;
}

let arr = [5, 2, 1, 8, 4, 7, 6, 3]
//                  
console.log(pivot(0, arr));
// return index (4)
console.log(arr)
// [2, 1, 4, 3, 5, 8, 7, 6]
