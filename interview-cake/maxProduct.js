// highestProd3 = 5000
// maxProd2 = 10
// minProd2 = -50
// max: 10
// min: 1
//                  i
// [1, 10, -5, 1, -100]


const maxProduct = arr => {
  // highestProd3 = arr[0] * arr[1] * arr[2];
  // maxProd2 = 10
  // minProd2 = -50
  // min = -5
  // max = 10
  //          i
  // [1, 10, -5, 1, -100]
    //  is 10 bigger than 1? yes
    // is 10 smaller than 1? no
    // is 10 bigger than maxProd2? no
    // is 10 smaller than minProd2? no

    // current = -5
    // what's biggest? current * min, current * max, or maxProd2  => 10
    // what's smallest? current * min, current * max, or minProd2 => -50
    // what's smaller? current or min? => -5
    // what's bigger? current or max? 
    let min = arr[0];
    let max = arr[0];
    let minProd2 = arr[1] * arr[0]
    let maxProd2 = arr[1] * arr[0]
    let highestProd3 = arr[0] * arr[1] * arr[2];

  for(let i = 1 ; i < arr.length ; i++) {
    let current = arr[i]
    if(i > 2) {
      highestProd3 = Math.max(current * maxProd2, current* minProd2, highestProd3)
    }
    if(i > 1){
      minProd2 = Math.min(current * min, current * max)
      maxProd2 = Math.max(current * min, current * max)
    }
    min = Math.min(current, min);
    max = Math.max(current, max)
  }
  return highestProd3
}

// const maxProduct = arr => {
//   const swap = (var1, var2) => {
//     let temp = var1;
//     var1 = var2;
//     var2 = temp
//   }
//   //     i
//   // [1, 5, 4, 3]
//   //  M
//   let max = arr[0];
//   let second;
//   let third;
//   let temp
//   // loop through the array
//     // is this bigger than max? if so swap
//     // is this bigger than second? if so swap
//     // is this bigger than third? if so swap
//   for(let i = 1 ; i < arr.length ; i++) {
//     let current = arr[i];
//     // 5
//     if(current > max) {
//       temp = max;
//       // temp = 1
//       max = current;
//       // max = 5
//       current = temp;
//       // current: 1
//     }
//     if(!second) {
//       second = current
//     } else if(current > second) {
//       temp = second
//       second = current
//       current = temp
//     }
//     if(!third) {
//       third = current
//     } else if(current > third) {
//       temp = third;
//       third = current;
//       current = temp;
//     }
//   }
//   return max * second * third
// }

console.log(maxProduct([1, 10, -5, 1, -100]))