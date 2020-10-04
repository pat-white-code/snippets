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

  // bubbleUp() {
  //   let idx = this.values.length - 1;
  //   const element = this.values[idx];
  //   while(true) {
  //     let parentIdx = Math.floor((idx - 1) / 2);
  //     let parent = this.values[parentIdx];
  //     if(element > parent) {
  //       this.values[parentIdx] = element;
  //       this.values[idx] = parent;
  //     }
  //   }
  // }
}



module.exports = MaxBinaryHeap;