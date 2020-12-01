const findRotationPoint = (arr) => {
  //          F  M     C                 
  // [ 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7]
  let floorIdx = 0;
  let ceilingIdx = arr.length;
  while(floorIdx < ceilingIdx) {
    let midIdx = Math.floor((floorIdx + ceilingIdx) / 2)
    if(arr[floorIdx] > arr[midIdx]) {
      if(floorIdx + 1 === midIdx) { 
        return arr[midIdx]
      }
      // go left
      ceilingIdx = midIdx;
    } else if(arr[midIdx] > arr[ceilingIdx]){
      if(midIdx + 1 === ceilingIdx) {
        return arr[midIdx]
      };
      //go right
      floorIdx = midIdx
    }
  }
  return 'hi';
}

// console.log(findRotationPoint([[5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4]]))
console.log(findRotationPoint([[7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6]]))
// console.log(findRotationPoint([[10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]))
// console.log(findRotationPoint([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]))
// console.log(findRotationPoint([[2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1]]))
// console.log(findRotationPoint([[8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7]]))

console.log('hi')