class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    // add an item to the beginning of the list
    let newNode = new Node(val);
    if(this.length === 0) {
      this.first, this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length ++
    return this.length
  }
}


module.exports = Stack;