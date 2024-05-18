function maxSubArray(nums: number[]): number {
    // iterate over array
    // track max
    // track currentSUm
    // if currentSum < 0, current sum = 0
    // add current to currentSum
    // if current sum is greater than maxSum, reset maxSum
    let currentSum = nums[0]
    let maxSum = nums[0]

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]

        currentSum = Math.max(currentSum, 0)
        currentSum += current
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
};
//  c
// [4, -1, 2, -7, 3, 4]