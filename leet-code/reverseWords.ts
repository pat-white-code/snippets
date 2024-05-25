function reverseWords(s: string): string {
    let reversedSentence = ''
    let currentWord = ''
    const words: string[] = []
    for (let i = s.length - 1; i >= 0; i--) {
        const letter = s[i]
        if (letter === ' ' && currentWord) {

            //terminate current word
            reversedSentence += currentWord + ' '
            words.push(currentWord)

            // reset current word
            currentWord = ''
        } else if (letter !== ' ') {
            //build currentWord
            currentWord = letter + currentWord
        }
    }

    // terminate remaining currentWord
    if (currentWord) {
        reversedSentence += currentWord
        words.push(currentWord)
        currentWord = ''
    }

    return words.join(' ')
};