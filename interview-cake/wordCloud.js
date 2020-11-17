// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

// We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.

// Think about capitalized words. For example, look at these sentences:

//   "After beating the eggs, Dana read the next step:"
// "Add milk and eggs, then add flour and sugar."
// What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

// Assume the input will only contain words and standard punctuation.

// You could make a reasonable argument to use regex in your solution. We won't, mainly because performance is difficult to measure and can get pretty bad.


const wordCloud = (str) => {
  // start = 18;
  // end = 18;
  //                    i
  const wordMap = new Map();
  let start = 0;
  let end = 0;
  let regex = /[a-zA-Z]/
  for(let i = 0 ; i < str.length ; i++) {
    //                     s
    //                     e 
//                         i 
    // "Add milk and eggs, then add flour and sugar."
    if(regex.test(str[i])) {
      end++;
    } else if(start !== end) {
      let word = str.substring(start, end).toLowerCase()
      console.log(word);
      if(wordMap[word]) { 
        wordMap[word]++
      } else {
        wordMap[word] = 1
      }
        start = i + 1
        end = i + 1
      } else {
        start = i + 1
        end = i + 1
      }
    }
  return wordMap;
}

  // iterate through the sentence,
  // when the start and end of a word is detected, add that to the wordMap or increment at wordMap.
    // if character at index does not match /[a-z][A-Z]/
    // finish the word and add it to map,
    // otherwise, start a new word, unless the word.length === 0;
// let word = str.subString(0, i)
// if wordMap[word] exists, increment, otherwise add,
// start = i + 1;
// end = i + 1;
// i++}

console.log(wordCloud("Add milk and eggs, then add flour and sugar."))

module.exports = {
  wordCloud
}