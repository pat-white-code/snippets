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
}

// let list = new SinglyLinkedList();

// list.push(55);
// list.push(100);
// list.push(-2);

// console.log('SHIFTED', list.shift())

// console.log(list);

module.exports = SinglyLinkedList;