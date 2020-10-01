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

  insert(val, current = this.root) {
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

  // find(target, current = this.root) {
  //   if(current.val === target) return true;
  //   if(target > current.val && !current.right) return false;
  //   if(target < current.val && !current.left) return false;
  //   if(target >= current.right.val) return this.find(target, current.right);
  //   if(target <= current.left.val) return this.find(target, current.left);
  // }
  find(target) {
    // if(this.root.val === target) return true;
    let current = this.root;
    while(current) {
      if(current.val === target) return true;

      if(target >= this.root) {
        current = current.right;
      } else {
        current = current.left
      }
    }
    return false;
  }
  bfs() {
    let q = []
    let visited = [];
    q.push(this.root);
    while(q.length) {
      let removed = q.shift();
      visited.push(removed.val);
      if(removed.left) {
        q.push(removed.left)
      }
      if(removed.right) {
        q.push(removed.right)
      }
    }
    return visited;
  }
  dfsPre() {
    // for any node, look at it's left side, then it's right side
    let output = [];
    const recursively = (node) => {
      console.log(node);
      output.push(node.val);
      if(node.left){
        recursively(node.left)
      };
      if(node.right) {
        recursively(node.right)
      }
    }
    recursively(this.head);
    return this;
  }
}
//    5
//  3    6
// 2
let bst = new BST()
bst.insert(5)
bst.insert(3)
bst.insert(6)
bst.insert(2)

console.log(bst.dfsPre());

module.exports = BST;