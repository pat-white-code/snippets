class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = this.values[parentIdx]
    while(element.priority > parent.priority) {
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
      parent = this.values[parentIdx];
    }
  }

  enqueue(node) {
    this.values.push(node);
    this.bubbleUp();
    return this;
  }

  dequeue() {
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
        if(leftChild.priority > element.priority) {
          swap = leftChildIdx
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if( 
          (swap === null && rightChild.priority > element.priority) || 
          (swap !== null && rightChild.priority > leftChild.priority)) {
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