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
  pop() {
    // remove the item from the end of the list
    // return the removed node.
    // traverse the list, the current node is called current.
    // if current.next.next = null,
    // save removed as current.next.next;
    // set current.next = null
    // this.tail = current.
    // return removed
    let current = this.head;
    if(!this.head) return undefined;
    if(!this.tail) {
      this.head = null;
      this.length --
      return current;
    }
    while(current.next){
      if(current.next.next === null){
        let removed = current.next;
        this.tail = current;
        current.next = null;
        this.length --
        return removed;
      }
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();

list.push(55);
list.push(100);
list.push(-2);

console.log('POPPED', list.pop())

console.log(list);

module.exports = SinglyLinkedList;