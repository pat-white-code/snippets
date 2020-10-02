const binaryHeap = [];

binaryHeap.push(55)
binaryHeap.push(40)
binaryHeap.push(33)
binaryHeap.push(21)

//      55
//   40    33
// 21

const insert = (val) => {
  binaryHeap.push(val);
  let index = binaryHeap.length - 1;
  let parentIndex = Math.floor((index - 1) / 2)
  while (val > binaryHeap[parentIndex]) {
    // swap
    let temp = binaryHeap[parentIndex];
    binaryHeap[parentIndex] = val;
    binaryHeap[index] = temp;

    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2)
  }
  return binaryHeap;
}

insert(100);

//     100
//   55    33
// 21  40  57

//     100
//    55    57
//   21 40 33  21
insert(57)
insert(21)
insert(200)

console.log(binaryHeap);