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
        if(leftChildIdx > element) {
          swap = leftChildIdx
        }
      }
      if(rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if( 
          (swap === null && rightChild > element) 
            || 
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



module.exports = MaxBinaryHeap;