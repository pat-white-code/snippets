const ListNode = require('./ListNode');

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    // add item to end of list
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    // create new node based on input val
    // if there is no head, assign new node as head and as tail
    // otherwise, point tail.next to new node, then assign this.tail as new node

  }
}

let newNode = new ListNode(55);

console.log(newNode);