/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
        return null
    }

    const getMin = (root: TreeNode): TreeNode => {
        let current = root
        while (current && current.left) {
            current = current.left
        }
        return current
    }
    if (key > root.val) {
        // call remove on right
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        // found value to delete
        // case 0 or 1 children
        if (!root.left) {
            return root.right
        }
        if (!root.right) {
            return root.left
        }

        //case 2 or more children
        // get min
        let minNode = getMin(root.right)
        root.val = minNode.val
        root.right = deleteNode(root.right, minNode.val)
    }
    return root
};