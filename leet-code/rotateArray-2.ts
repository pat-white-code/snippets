// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const rotateLeft = (arr: number[]) => {
    let removed = arr.shift()!
    arr.push(removed)
}

const rotateRight = (arr: number[]) => {
    let removed = arr.pop()!
    arr.unshift(removed)
}

function rotate(nums: number[], k: number): void {
    if (k > nums.length) {
        k = k % nums.length
    }

    if (k === 0 || k === nums.length) {
        return
    }

    if (k > Math.floor(nums.length / 2)) {
        let numberOfRotations = nums.length - k
        let i = 0
        while (i < numberOfRotations) {
            rotateLeft(nums)
            i++
        }
    } else {
        let i = 0
        while (i < k) {
            rotateRight(nums)
            i++
        }
    }
}; 