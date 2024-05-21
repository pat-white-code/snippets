// Partition Equal Subset Sum
// You are given an array of positive integers nums.

// Return true if you can partition the array into two subsets, subset1 and subset2 where sum(subset1) == sum(subset2). Otherwise, return false.

// Example 1:

// Input: nums = [1,2,3,4]

// Output: true
// Explanation: The array can be partitioned as [1, 4] and [2, 3].

// Example 2:

// Input: nums = [1,2,3,4,5]

// Output: false
// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 50

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums: number[]): boolean {
    const cache = {} as Record<number, Record<number, boolean>>
    for (let i = 0; i < nums.length; i++) {
        cache[i] = {}
    }
    const subsetRight = []
    const subsetLeft = []

    const dfs = (i: number, nums: number[], [subsetLeft, subsetRight]: number[][]) => {
        const sumLeft = subsetLeft.reduce((a, b) => a + b, 0)
        const sumRight = subsetRight.reduce((a, b) => a + b, 0)
        const diff = Math.abs(sumLeft - sumRight)

        //base case
        if (i === nums.length) {
            return diff === 0 ? true : false
        }

        if (cache[i][diff]) {
            return cache[i][diff]
        }

        subsetLeft.push(nums[i])
        let left = dfs(i + 1, nums, [subsetLeft, subsetRight])
        if (left) {
            cache[i][diff] = left
            return cache[i][diff]
        }

        //backtrack
        subsetLeft.pop()

        //put in right subset
        subsetRight.push(nums[i])
        let right = dfs(i + 1, nums, [subsetLeft, subsetRight])

        //backtrack
        subsetRight.pop()

        cache[i][diff] = right
        return cache[i][diff]
    }

    return dfs(0, nums, [subsetLeft, subsetRight])
}
