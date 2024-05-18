// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).


function minSubArrayLen(target: number, nums: number[]): number {
    // init L at 0
    // init R at 0
    // init sum at 0
    // while(sum < target) // R++
    // if sum >= target check/update minSum
    // if we reach [1] return 1
    //            L     
    //            R
    // [2,3,1,2,4,7] // target = 7 output = 2
    // return minimal length of subarray >= target
    let L = 0
    let R = 0
    let sum = nums[0]
    let minLength = Infinity
    while(R < nums.length) {
        
        // valid sub array
       while(sum >= target) {
           const currentLength = R - L + 1
           minLength = Math.min(minLength, currentLength)
           if(minLength === 1) {
               return minLength
           }
           
           // Increment Left => subtractOutgoing from sum, add incoming from sum
           sum -= nums[L]
           L++
       }
        R++
        sum += nums[R]
    }
    return minLength === Infinity ? 0 : minLength
};