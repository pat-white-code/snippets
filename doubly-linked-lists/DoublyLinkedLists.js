const Node = require('./Node');

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
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
    if(!this.head) return undefined;
    let poppedNode = this.tail
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length --;
    return poppedNode;
  }

  contains(val){
    let current = this.head;
    while(current) {
      if(current.val === val) return true
      current = current.next
    }
    return false
  }

  shift(){
    if(!this.head) return undefined;
    let shiftedNode = this.head;

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null;
    }
    this.length--
    return shiftedNode;
  }
  unshift(val) {
    // add a node to the start of the list
    // create the new node
    // if !this.head, set head and tail = new node;
    // otherwise
    // set new node.next = this.head
    // set this.head.prev = new node
    // set this.head = new node
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++
    return this;
  }
}

module.exports = DoublyLinkedList;