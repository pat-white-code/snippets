function majorityElement(nums: number[]): number {
    const majorityThreshold = Math.floor(nums.length / 2)
    let count = 0
    
    nums = nums.sort((a,b) => a - b)
    
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i]

        if(i === majorityThreshold) {
            return current
        }
        
        if(prev === null) {
            // first iteration
            prev = current
            count++
        } else if(prev === current) {
            count++
            if(count > majorityThreshold) {
                return current
            }
        } else {
            // prev !== current
            count = 1
            prev = current
        }
    }
};