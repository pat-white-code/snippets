// given an array of strings, reverse the order in place

const reverse = (arr) => {
  // reverse the array
  // [c, a, t] => [t, a, c]
  // swapping in place means we can't simply create an empty array and iterate the array backwards to build a new array
  // instead we have to swap items in the original array
  // i                  j
  // [p a t c h a d a m s]
  // while i < j
  // swap the elements at arr[i] and arr[j]
  let i = 0, j = arr.length - 1;
  
}