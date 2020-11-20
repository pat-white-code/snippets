

const productOfOthers = arr => {
  //     i
  // [1, 2, 6, 5, 9]
  // fromBeginning[0] * toEnd[2]
  //   1                  6*5*9
  // fromBeginning[1] * toEnd[3]
  //    2                   5*9
  // fromBeginning[2] * toEnd[4]
  //    12                 9
  let startingTotal = 1;
  let endingTotal = 1;
  let fromBeg = [];
  let toEnd = [];
  let output = []
  for(let i = 0 ; i < arr.length ; i++) {
    startingTotal = startingTotal * arr[i]
    // 540
    fromBeg[i] = startingTotal
    // [1, 2, 12, 60, 540]
  }

  for(let i = arr.length - 1 ; i >= 0; i--) {
    endingTotal = endingTotal * arr[i];
    // 9
    toEnd[i] = endingTotal;
    // [0, 0, 0, 0, 9]
  }
  for(let i = 0; i < arr.length ; i++) {
    output[i] = 1;

    if(arr[i - 1]) {
      output[i] = output[i] * fromBeg[i - 1]
    }
    if(arr[i + 1]){
      output[i] = output[i] * toEnd[i + 1]
    }
  }
  // console.log('fromBeg', fromBeg)
  // console.log('toEnd', toEnd);
  return output;
}

console.log(productOfOthers([1, 2, 6, 5, 9]))