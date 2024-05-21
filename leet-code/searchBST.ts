/** 
 * You are given the root of a binary search tree (BST) and an integer val.
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
 * **/


function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let node = root

    while(node) {
        if(node.val < val) {
            // look right
            node = node.right
        } else if(node.val > val){
            //look left
            node = node.left
        } else {
            return node
        }
    }

    return null
};