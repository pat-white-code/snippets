class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        //init cache
        const cache = {};

        for (let i = 0; i <= nums.length; i++) {
            cache[i] = {};
        }

        const dfsHelper = (i, nums, target, sum) => {
            // base case, return 1 if success, else 0
            if (i === nums.length) {
                if (sum === target) {
                    return 1;
                } else {
                    return 0;
                }
            }

            // check cache
            if (cache[i]?.[sum] !== undefined) {
                return cache[i][sum];
            }

            // add number
            const plus = dfsHelper(i + 1, nums, target, sum + nums[i]);

            //subtract number
            const minus = dfsHelper(i + 1, nums, target, sum - nums[i]);

            // save to cache
            cache[i][sum] = plus + minus;
            return cache[i][sum];
        };

        return dfsHelper(0, nums, target, 0);
    }
}
