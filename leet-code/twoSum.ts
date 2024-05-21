function twoSum(nums: number[], target: number): number[] | undefined {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i] // 2
        const difference = target - number // 7
        if (hashMap[difference] !== undefined) {
            return number < difference ? [i, hashMap[difference]] : [hashMap[difference], i]
        } else {
            hashMap[number] = i
        }
    }

};