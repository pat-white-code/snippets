class Node {
  constructor(val) {
    this.next = null;
    this.val = val
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    // add to the end of the list
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode
    }
    this.length++;
    return this.length;
  }
  dequeue() {
    // remove an item from the front of the list
    // {first: 1, last: 3, length: 3}
    if(!this.first) return undefined;
    let removed = this.first;
    if(this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
    }
    this.length--;
    removed.next = null;
    return removed;
  }
}

module.exports = Queue;