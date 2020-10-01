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
    let output = [];
    const traverse = (node) => {
      console.log(node);
      output.push(node.val);
      if(node.left){
        traverse(node.left)
      };
      if(node.right) {
        traverse(node.right)
      }
    }
    traverse(this.root);
    return output;
  }
  dfsPost() {
    let output = [];
    const traverse = (node) => {
      if(node.left){
        traverse(node.left)
      };
      if(node.right) {
        traverse(node.right)
      }
      output.push(node.val);
    }
    traverse(this.root);
    return output;
  }
  
  dfsPostRec(output = [], node = this.root) {
    if(!node.left && !node.right) return [...output, node.val];
    if(node.left) {
      output = this.dfsPreRec(output, node.left)
    };
    if(node.right) {
      output = this.dfsPreRec(output, node.right)
    };
    return [...output, node.val];
  }

  dfsPreRec(output = [], node = this.root) {
    if(!node.left && !node.right) return [...output, node.val];
    output = [...output, node.val];
    if(node.left) {
      output = this.dfsPreRec(output, node.left)
    };
    if(node.right) {
      output = this.dfsPreRec(output, node.right)
    };
    return output;
  }
}
//      5
//   3    8
//  2 4 7  10
//1       9

let bst = new BST()
bst.insert(5)
bst.insert(3)
bst.insert(8)
bst.insert(2)
bst.insert(7)
bst.insert(10)
bst.insert(9)
bst.insert(1)
bst.insert(4)

console.log(bst.dfsPreRec());

module.exports = BST;