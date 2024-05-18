function maxSubarraySumCircular(nums: number[]): number {
    let total = 0
    let minSum = Infinity // -1
    let currentSum = 0
    let maxSum = -Infinity

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]

        currentSum = Math.max(currentSum, 0)
        currentSum += current
        maxSum = Math.max(maxSum, currentSum)
    }
    
    currentSum = 0
    
    
    for(let i = 0; i < nums.length; i++) {

        let current = nums[i]
        total += current

        currentSum = Math.min(currentSum, 0)
        currentSum += current
        minSum = Math.min(currentSum, minSum)
    }
    
    if(minSum < 0 && maxSum > 0 && nums.length > 1) {
        console.log(minSum, maxSum)
        return Math.max(maxSum, total - minSum)
    } else {
        return maxSum
    }
};