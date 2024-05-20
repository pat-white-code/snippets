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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // empty tree
    if (!root) {
        return false
    }

    // base case
    if (!root.left && !root.right) {
        return root.val === targetSum ? true : false
    }

    const remainingSum = targetSum - root.val

    //if left, try left
    if (root.left) {
        const leftPath = hasPathSum(root.left, remainingSum)
        if (leftPath) {
            return true
        }
    }
    if (root.right) {
        //look right
        const rightPath = hasPathSum(root.right, remainingSum)
        if (rightPath) {
            return true
        }
    }
    return false
};