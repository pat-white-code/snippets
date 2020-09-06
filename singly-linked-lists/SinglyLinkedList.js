const ListNode = require('./ListNode');

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // add item to end of list
    let node = new ListNode(val);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
    return this;
    // create new node based on input val
    // if there is no head, assign new node as head and as tail
    // otherwise, point tail.next to new node, then assign this.tail as new node
  }

  pop(){
    if(!this.head) return undefined;

    let current = this.head;
    let newTail = this.head;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length --;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    } 
    return current;
  }
  shift() {
    if(!this.head) return undefined;
    let removed = this.head;
    this.head = removed.next;
    this.length--
    if(this.length === 0) {
      this.tail = null;
    }
    return removed;
  }
  unshift(val) {
    let newNode = new ListNode(val)
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    if(this.length === 1) {
      this.tail = newNode;
    }
    if(this.length === 2) {
      this.tail = this.head.next
    }
    return this;
  }

  get(idx) {
    if(idx < 0 || idx >= this.length) {
      return undefined
    }
    if(idx === this.length - 1) {
      return this.tail
    }
    // given an int, return the nth item of the linked list
    // get(0) returns the head, etc.
    let current = this.head;
    let i = 0;
    while(i !== idx) {
      current = current.next
      i++
    }
    // if(idx !== i) return undefined;
    return current;
  }

  set(idx, val) {
    let node = this.get(idx);
    if(!node) return false;
    node.val = val;
    return true;
  }

  insert(idx, val) {
    this.length++;
    // given an index, insert a new node at that index.
    // the previous node needs to point to the new node.
    // the new node needs to point to the disposioned node.

    let newNode = new ListNode(val);
    let current = this.head;
    let prevNode = null;
    let i = 0;
    while(i < idx) {
      prevNode = current;
      current = current.next;
      i++
    }
    newNode.next = current;
    prevNode.next = newNode;
    //      P    C
    // 1 -> 2 -> 3 -> 4

  }
}

// get(2)
//           idx
//  0 -> 1 -> 2 -> 3
//            C

let list = new SinglyLinkedList();

list.push(55);
list.push(100);
list.push(-2);

list.insert(1, 'INSERT!');

console.log(list);

// console.log(list);

module.exports = SinglyLinkedList;