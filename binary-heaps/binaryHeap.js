class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = this.values[parentIdx]
    while(element > parent) {
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
      parent = this.values[parentIdx];
    }
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  return this;
  }

  extract() {
    if(!this.values.length) return null;
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown()
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2* idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if(leftChild > element) {
          swap = leftChildIdx
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if( 
          (swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)) {
            swap = rightChildIdx
          }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// let mbh = new MaxBinaryHeap ();
// mbh.insert(10)
// mbh.insert(9)
// mbh.insert(8)
// mbh.insert(7)
// mbh.insert(6)
// mbh.insert(5)
// mbh.insert(4)

// console.log(mbh.extract());
// console.log(mbh.values);


module.exports = MaxBinaryHeap;