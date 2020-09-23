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
      while (current) {
        if (newNode.val > current.val){

          if(current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            break;
          }
        } else {
          if(current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            break;
          }
        }
      }
    }
  }
}

module.exports = BST;