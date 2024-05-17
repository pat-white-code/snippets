/**
 Do not return anything, modify nums in-place instead.
 */

 function rotate(nums: number[], k: number): void {
    if(k > nums.length) {
        k = k % nums.length
    }
    
    if(k === 0 || k === nums.length) {
        return
    }

    const firstHalf = nums.slice(nums.length - k)
    const secondHalf = nums.slice(0, nums.length - k)
    
    let i = 0
    let j = 0
    
    while(i < nums.length) {
        if(firstHalf[i] !== undefined) {
            nums[i] = firstHalf[i]
            i++
        } else {
            nums[i] = secondHalf[j]
            j++
            i++
        }
    }
};