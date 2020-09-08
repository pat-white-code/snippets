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
    if(idx > this.length) return -1;

    let newNode = new ListNode(val);

    if(idx === this.length) {
      this.tail = newNode;
    }
    if(idx === 0) {
      newNode.next = this.head
      this.head = newNode;
    } else {
      let current = this.head;
      let prevNode = null;
      let i = 0;
      while(i < idx) {
        prevNode = current;
        current = current.next;
        i++
      }
      newNode.next = current;
      if(prevNode) { prevNode.next = newNode };
    }
    this.length++
    //      P    C
    // 1 -> 2 -> 3 -> 4

  }

  remove(idx) {
    if(idx < 0 || idx >= this.length) return undefined;
    // if idx === 0, shift
    if(idx === 0) return this.shift()
    // if idx === length, pop()
    if(idx === this.length - 1) return this.pop();
    // traverse the array
    // find the targeted index
    // set the previous node.next = current.next
    let current = this.head
    let prev = null;
    let i = 0;
    while(i !== idx) {
      prev = current;
      current = current.next;
      i++
    }
    let removed = current;
    prev.next = current.next;
    this.length --;
    return removed;
    //           C
    // 1 -> 2 -> 3 -> 4
    //      P
  }

  reverse(){

    let current = this.head;
    // let next = current.next;
    let previous = null;

    while(current) {
      let next = current.next;
      current.next = previous;
      current = next;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    //    P    C    N
    // <- 1 <- 2 -> 3 -> 4 
    // 
  }

}

// get(2)
//           idx
//  0 -> 1 -> 2 -> 3
//            C

let list = new SinglyLinkedList();

list.insert(0, 'INSERT!');

console.log(list);

// console.log(list);

module.exports = SinglyLinkedList;