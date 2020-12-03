function arraySum(numbers) {
  let sum = 0;
  for(let i = 0 ; i < numbers.length ; i++) {
    sum += numbers[i]
  }
  return sum;
}

console.log(arraySum([4,6,3,2]))

function featuredProduct(products) {
  // ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat', 'pinkHat', 'blackShirt', 'yellowShirt', 'greenPants', 'greenPants']
  // Write your code here
  // {}
  // sort alphabetically
  products.sort();
  console.log(products);
  let maxItem;
  let maxCount = 0;
  let currentCount = 1;
  let currentItem;
  // if the next item in the array matches the previous item, increment current count, otherwise reset count to 1;
  // if current count is greater than or equal to maxCount, replace maxCount
  for(let i = 0; i < products.length ; i++) {
    if(products[i] === currentItem) {
      currentCount++
    } else {
      currentItem = products[i]
      currentCount = 1;
    }
    if(currentCount >= maxCount) {
      maxCount = currentCount
      maxItem = currentItem
    }
  }
  return maxItem
}

const input = ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat', 'pinkHat', 'blackShirt', 'yellowShirt', 'greenPants', 'greenPants'];

console.log(featuredProduct(input));

module.exports = {
  featuredProduct
}

// biggest difference
// difference index
// [4, -1, -6]
//      -1  -6
//   [4, -3, -7, 8]
// 0  4  -1 
// 1  5   
// 2  6   3  -4 
// 7          1  

function minX(arr) {
  let cumulativeIdx = 0;
  let current = 1;
  let start = 1;
  while(cumulativeIdx < arr.length) {    
      current = current + arr[cumulativeIdx];
      cumulativeIdx++;
      if(current < 1){
      current = (current * -1) + 1
      start = current;
      }
  }
  return start
}

module.exports = {minX}