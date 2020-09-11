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
}

module.exports = DoublyLinkedList;
