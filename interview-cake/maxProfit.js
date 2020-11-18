const maxProfit = (arr) => {
  //       i
  // [10, 100, 5, 8, 11, 9]
//        i   
  // [10, 9, 7, 5, 1]å
  if (arr.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
  let maxProfit = arr[1] - arr[0]; 
  let minPrice = arr[0];
  for(let i = 1 ; i < arr.length ;i++) {
    let currentPrice = arr[i];
    // 9
    let currentProfit = currentPrice - minPrice;
    // 9 - 10
    maxProfit = Math.max(currentProfit, maxProfit);
    // -1
    minPrice = Math.min(currentPrice, minPrice);
    // 9
  }
  return maxProfit
}

console.log(maxProfit([10, 7, 5, 8, 11, 9]))
console.log(maxProfit([10, 9, 7, 5, 1]))
console.log(maxProfit([10, 9]))
console.log(maxProfit([10]))
