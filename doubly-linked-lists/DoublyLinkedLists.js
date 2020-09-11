const Node = require("./Node");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  contains(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) return true;
      current = current.next;
    }
    return false;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined;
    let mid = Math.floor(this.length / 2);
    let current;
    if (idx > mid) {
      current = this.tail;
      let i = this.length - 1;
      while (i !== idx) {
        current = current.prev;
        i--;
      }
    } else {
      current = this.head;
      let i = 0;
      while (i !== idx) {
        current = current.next;
        i++;
      }
    }
    return current;
  }
  set(idx, val) {
    if(idx > this.length || idx < 0) return false;
    let node = this.get(idx);
    node.val = val;
    return true;
  }
  insert(idx, val) {
    if(idx > this.length || idx < 0) return false;
    if(idx === this.length) return !!this.push(val);
    if(idx === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(idx) {
    if(idx < 0 || idx > this.length - 1) return undefined;
    if(idx === 0) return !!this.shift();
    if(idx === this.length - 1) return !!this.pop();

    let removed = this.get(idx);
    let beforeNode = removed.prev;
    let afterNode = removed.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removed.next = null;
    removed.prev = null;

    this.length-- ;
    return removed;
  }
  reverse(){
    if(!this.head) return undefined;
    // traverse the array
    // save current.next to a variable
    // reset current.next to equal current.previous
    // set current.previous to equal current.next;
    let current = this.head;
    while(current) {
      //         1 -> 2 -> 3 -> 4
      // null <- C    N
      let nextNode = current.next;
      current.next = current.prev;
      current.prev = nextNode;
      current = nextNode;
    }
    let oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
    return this;
  }
  swap(idx1, idx2){
    if(idx1 < 0 || idx1 > this.length) return false;
    if(idx2 < 0 || idx2 > this.length) return false;

    let node1 = this.get(idx1);
    // {val: 2, next: node3 prev: node0}
    let temp = new Node(node1.val);
    temp.next = node1.next;
    temp.prev = node1.prev;

    // {val: 2, next: node3 prev: node0}
    let node2 = this.get(idx2);
    // {val: 3, next: node4, prev: node2}

    node1.next = node2.next;
    // node1: {val: 2, next: node4 prev: node0}
    node1.prev = node2.prev;
    // node1: {val:2, next:node4 prev: node3}

    if(node2.next) node2.next.prev = node1;
    if(node2.prev) node2.prev.next = node1;

    node2.next = temp.next;
    node2.prev = temp.prev;
    if(temp.next) temp.next.prev = node2;
    if(temp.prev) temp.prev.next = node2;

    if(idx1 === 0) this.head = node2;
    if(idx2 === this.length - 1) this.tail = node1;

    console.log(this);
    return true;
  }
}

module.exports = DoublyLinkedList;
