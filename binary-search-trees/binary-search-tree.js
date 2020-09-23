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

  // insert(val) {
  //   let newNode = new Node(val);
  //   if(!this.root) {
  //     this.root = newNode;
  //     return this;
  //   } else {
  //     let current = this.root;
  //     while (current) {
  //       if(current.val === newNode.val) return undefined;
  //       if (newNode.val > current.val){

  //         if(current.right) {
  //           current = current.right;
  //         } else {
  //           current.right = newNode;
  //           return this
  //         }
  //       } else {
  //         if(current.left) {
  //           current = current.left;
  //         } else {
  //           current.left = newNode;
  //           return this;
  //         }
  //       }
  //     }
  //   }
  // }

  insert (val, current = this.root) {
    // base case:
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    if(val === current.val) return undefined;
    if (val > current.val && !current.right) {
      current.right = new Node(val);
      return this;
    }
    if( val < current.val && !current.left) {
      current.left = new Node (val);
      return this;
    }
    (val > current.val) ? 
      this.insert(val, current.right) : 
      this.insert(val, current.left);
  }
}

module.exports = BST;