class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current.left || current.right) {
        if (newNode.val > current.val){
          // if new node is greater than current.val, look to the right. if right node exists, repeat on right. If not, insert as current.right
          if(current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            current = newNode;
          }
        } else {
          if(current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            current = newNode;
          }
        }
      }
    }
  }
}

module.exports = BST;