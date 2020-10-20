// given an array of strings, reverse the order in place

const reverse = (arr) => {
  // reverse the array
  // [c, a, t] => [t, a, c]
  // swapping in place means we can't simply create an empty array and iterate the array backwards to build a new array
  // instead we have to swap items in the original array
  //          i                   
  // [p a t c h a d a m s]
  //              j
  // while i < j
  // swap the elements at arr[i] and arr[j]
  let i = 0;
  let j = arr.length - 1;
  while(i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
  return arr;
}

module.exports = reverse;