/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/


function isValid(s: string): boolean {
    const stack = [] as string[]
    const isOpen = (str: string) => str === '[' || str === '(' || str === '{'

    // iterate through string
    for (let i = 0; i < s.length; i++) {
        const bracket = s[i]
        
        // if isOpenBracket, add to stack
        if(isOpen(bracket)) {
            stack.push(bracket)
        } else {

            // if isClosedBracket, remove last open from stack
            const removedBracket = stack.pop()
            const pair = removedBracket + bracket
            const isMatch = pair === '[]' || pair === '{}' || pair === '()'
            
            // if it doesn't match, return false
            if(!isMatch) {
                return false
            }
        }
    }
    
    // after iteration, if stack has length return false, else return true
    return stack.length ? false : true
};