
/*
383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
Accepted
1,131,738
Submissions
1,843,669
Seen this question in a real interview before?
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
    const dictionary = {}

    //iterate over magazine
    for (let i = 0; i < magazine.length; i++) {
        const letter = magazine[i]

        // build out dict {a: 2, b:1}
        if (dictionary[letter]) {
            dictionary[letter]++
        } else {
            dictionary[letter] = 1
        }
    }
    // iterate ransome
    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i]

        //decrement dictionary {a: 0 b: 1, c: -1}
        if (dictionary[letter]) {
            //greater than 0
            dictionary[letter]--
        } else {
            //   if letter = -1, return false
            return false
        }
    }
    //otherwise return true
    return true
};