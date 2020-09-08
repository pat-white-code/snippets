
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
    }
    let oldTail = this.tail;
    oldTail.next = newNode;
    newNode.prev = oldTail;
  }
}

module.exports = DoublyLinkedList;