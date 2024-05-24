function longestCommonPrefix(strs: string[]): string {
    let maxPrefix = ''
    const sampleWord = strs[0]
    for (let compareIndex = 0; compareIndex < sampleWord.length; compareIndex++) {
        const letterSample = sampleWord[compareIndex]
        //iterate compare with other words
        for (let wordIndex = 1; wordIndex < strs.length; wordIndex++) {
            let compareLetter = strs[wordIndex][compareIndex]
            //see if f is in each word
            if (compareLetter !== letterSample) {
                return maxPrefix
            }
        }
        maxPrefix += letterSample
    }
    return maxPrefix
};