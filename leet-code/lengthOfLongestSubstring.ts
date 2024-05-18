// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s: string): number {
    let L = 0
    const dict = {}
    let maxSubstring = 0
    
    for(let R = 0; R < s.length; R++) {
        let char = s[R]
        while(dict[char] && L <= R) {
            const outgoingChar = s[L]
                dict[outgoingChar] = false
                L++
            }
        dict[char] = true
        let length = R - L + 1
        maxSubstring = Math.max(length, maxSubstring)
    }

    return maxSubstring
};