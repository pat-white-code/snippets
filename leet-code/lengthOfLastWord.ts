function lengthOfLastWord(s: string): number {
    //iterate from the end of the array
    // if it is a space, we return the length of the word
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        const letter = s[i]
        if (letter === ' ') {
            if (count === 0) {
                continue
            } else {
                return count
            }
        }
        count++
    }
    return count
};