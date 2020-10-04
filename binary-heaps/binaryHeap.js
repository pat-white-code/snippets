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
    if(!this.values.length) return null
    // let removed = this.values.shift();
    // switch the the first and last index, then pop()
    let removed = this.values[0];
    let last = this.values[this.values.length - 1];
    this.values[0] = last;
    this.values[this.values.length - 1] = removed;
    removed = this.values.pop();
    let leftIdx;
    let rightIdx;
    let parentIdx = 0;
    let biggerIdx;
    while(this.values[parentIdx * 2 + 1] || this.values[parentIdx * 2 + 2]) {
      leftIdx = parentIdx * 2 + 1
      rightIdx = parentIdx * 2 + 2
      biggerIdx = (this.values[leftIdx] > this.values[rightIdx]) ? leftIdx : rightIdx;
      if(this.values[parentIdx] < this.values[biggerIdx]) {
        let parent = this.values[parentIdx];
        this.values[parentIdx] = this.values[biggerIdx];
        this.values[biggerIdx] = parent;
        parentIdx = biggerIdx;
      }
    }
    return removed;
  }

  bubbleDown() {
    let idx = 0;
    let element = this.values[0]
    let biggerChild = null;
    let biggerIndex = null;
    let child1;
    let child2;
    if(this.values[1] > this.values[2]){
      biggerChild = this.values[1];
      biggerIndex = 1;
    } else {
      biggerChild = this.values[2];
      biggerIndex = 2;
    }
    while(element < biggerChild) {
      this.value[biggerIndex] = element;
      this.value[idx] = biggerChild;
      idx = biggerIndex;
      element = this.values[biggerIndex];
      child1 = this.values[(2*idx + 1)];
      child2 = this.values[(2*idx + 2)];
      if(child1 > child2) {
        biggerChild = chidl1;
        biggerIndex = 2 * idx + 1;
      } else {
        child2 = biggerChild;
        biggerIndex = 2 * idx + 2
      }
    }
    // swap the element with the biggerChild;
  }
}



module.exports = MaxBinaryHeap;