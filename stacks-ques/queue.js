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
    }
    this.last.next = newNode;
    this.last = newNode
  }
}

module.exports = Queue;