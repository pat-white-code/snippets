
const isSuperBalanced = (tree) => {
  let maxDepth = 0;
  let minDepth = 0;

  const traverseDepth = (node, currentDepth) => {
    if(node.left) {
      traverseDepth(node.left, currentDepth + 1)
    }
    if(node.right) {
      traverseDepth(node.right, currentDepth + 1)
    }
    if(!node.left && !node.right) {
      maxDepth = math.Max(currentDepth, maxDepth);
      minDepth = math.Min(currentDepth, minDepth);
    }
  }
  if(minDepth + 1 < maxDepth) {
    return false
  } else {
    return true;
  }
}