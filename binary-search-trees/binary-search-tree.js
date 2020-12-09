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
  dfsInOrder() {
    let output = [];
    const traverse = (node) => {
      if(node.left){
        traverse(node.left)
      };
      output.push(node.val);
      if(node.right) {
        traverse(node.right)
      }
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

  isSuperBalanced(){
    if(!this.root) return true;
    let maxDepth;
    let minDepth;
  
    const traverseDepth = (node, currentDepth) => {
      if(node.left) {
        traverseDepth(node.left, currentDepth + 1)
      }
      if(node.right) {
        traverseDepth(node.right, currentDepth + 1)
      }
      if(!node.left && !node.right) {
        if(!maxDepth) {
          maxDepth = currentDepth;
        } else {
          maxDepth = Math.max(currentDepth, maxDepth);
        }
        if(!minDepth) {
          minDepth = currentDepth;
        } else {
          minDepth = Math.min(currentDepth, minDepth);
        }
      }
    }

    traverseDepth(this.root, 0);

    console.log('MAX', maxDepth)
    console.log('min', minDepth)

    if(minDepth + 1 < maxDepth) {
      return false
    } else {
      return true;
    }
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

console.log(bst.dfsInOrder());

module.exports = BST;