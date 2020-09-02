const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

let arr = [1,2,3,4]
swap(arr, 1, 3);
console.log(arr);

module.exports  = swap;