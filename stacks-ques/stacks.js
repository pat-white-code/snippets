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
  pop() {
    // remove the first item of the list
    if(!this.first) return undefined;
    let removed = this.first;
    this.first = removed.next;
    this.length--;
    if(this.length === 1) {
      this.first = this.last;
    }
    if(this.length === 0) {
      this.first = null;
      this.last = null;
    }
    removed.next = null;
    return removed;
  }
}


module.exports = Stack;