function longestPrefixPair(strs: string[]): string {
    // i = 0
    //.i      i    i      i
    // flower flow flight car
    // for each str[i],
    // sort the words
    // read the first word and save it
    // compare each word with the previous word, and save the maxNumber of common letters
    // then reset the prevWord to the current word and repeat
    let maxPrefix = ''
    let currentPrefix = ''
    for (let i = 0; i < strs.length; i++) {
        const currentWord = strs[i]
        const prevWord = strs[i - 1]
        if (prevWord === undefined) {
            continue
        }
        // compare words for max common prefix
        let j = 0
        while (prevWord[j] === currentWord[j]) {
            currentPrefix += prevWord[j]
            if (currentPrefix.length > maxPrefix.length) {
                maxPrefix = currentPrefix
            }
            j++
        }
        currentPrefix = ''
    }
    return maxPrefix
};