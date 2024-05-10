// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

 

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:


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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if(!nums.length) return null
    if(nums.length === 1) return new TreeNode(nums[0])
    
    const middleIndex = Math.floor(nums.length / 2)
    const val = nums[middleIndex]
    const left = nums.slice(0, middleIndex)
    const right = nums.slice(middleIndex + 1)
    
    return new TreeNode(val, sortedArrayToBST(left), sortedArrayToBST(right))
};