class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        // const cache = {}

        // for(let i = 0; i <= nums.length; i++) {
        //     cache[i] = {}
        // }

        const dfsHelper = (i, nums, target, sum) => {
            // if i > length of nums, return 0
            if (i === nums.length) {
                if (sum === target) {
                    return 1;
                } else {
                    return 0;
                }
            }
            // if(cache[sum]?.[i]) {
            //     return cache[sum][i]
            // }
            // if (cache[])
            // cache: {
            //     [sum]: {
            // }
            // }

            // add number
            // const plus = cache[i + 1][sum + nums[i]] = dfsHelper(i + 1, nums, target, sum + nums[i])
            const plus = dfsHelper(i + 1, nums, target, sum + nums[i]);
            //subtract number
            // const minus = cache[i + 1][sum - nums[i]] = dfsHelper(i + 1, nums, target, sum - nums[i])
            const minus = dfsHelper(i + 1, nums, target, sum - nums[i]);
            return plus + minus;
        };
        return dfsHelper(0, nums, target, 0);
        // [+2] //[-2]
        //[+2+2] [+2-2] //[-2-2] //[-2+2]
        //+2+2+2 +2+2-2 +2-2+2 +2-2-2
    }
}
