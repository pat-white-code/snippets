function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const shuffle = (arr) => {
  // [1, 2, 3, 4, 5, 6]
  for(let i = 0; i < arr.length ; i++) {
    let shuffleIdx = getRandom(i, arr.length - 1)
    // 4
    let temp = arr[i];
    arr[i] = arr[shuffleIdx];
    arr[shuffleIdx] = temp;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(shuffle([1, 2, 3, 4, 5, 6]))
console.log(shuffle([1, 2, 3, 4, 5, 6]))
console.log(shuffle([1, 2, 3, 4, 5, 6]))
console.log(shuffle([1, 2, 3, 4, 5, 6]))
console.log(shuffle([1, 2, 3, 4, 5, 6]))
console.log(shuffle([1, 2, 3, 4, 5, 6]))