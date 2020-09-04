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
}

let list = new SinglyLinkedList();

list.push(55);
list.push(100);
list.push(-2);

console.log(list);