function searchInsert(nums: number[], target: number): number | undefined {
    if (target < nums[0]) return 0
    if (target > nums[nums.length - 1]) return nums.length

    let rangeStart = 0
    let rangeEnd = nums.length - 1
    while (rangeStart <= rangeEnd) {
        let rangeMid = Math.floor((rangeStart + rangeEnd) / 2)
        const sample = nums[rangeMid]

        if (sample === target) {
            return rangeMid
        } else if (sample < target) {
            //go right
            rangeStart = rangeMid + 1
            if (nums[rangeStart] > target) {
                return rangeStart
            }
        } else if (sample > target) {
            //go left
            rangeEnd = rangeMid - 1
            if (nums[rangeEnd] < target) {
                return rangeEnd + 1
            }
        }
    }
};