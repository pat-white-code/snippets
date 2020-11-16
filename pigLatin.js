const pigLatin = (word) => {
  // word: 'cat'
  let split = word.split('')
  
  //                    i
  // split: ['c', 'h', 'e', 'a', 't']
  // i = 2

  for(let i = 0; i < split.length ; i++) {
    let letter = split[i]
    // if vowel
      // grab all the letters smaller than i;
      const consonants = split.splice(0, i)
      // const consonants = ['c', 'h']
      //           0    1   2  
      // split: ['e', 'a', 't']
      split.splice(split.length - 1, 0, ...consonants)
      // split: ['e', 'a', 't', 'c', 'h']
      let finishedWord = split + 'ay'
      // let pigLatinConsonant = split + consonants + 'ay'
      return finishedWord
  }

  // output: 'atchay'

}