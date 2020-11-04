// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

// JavaScript
// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.


const message = [ 'c', 'a', 'k', 'e', ' ',

'p', 'o', 'u', 'n', 'd', ' ',

's', 't', 'e', 'a', 'l' ];

const reverseWords = (arr) => {
  let left = 0, right = arr.length - 1;
  while(left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp
    left++
    right--
  }
  let currentWord = [0, 0];
  let words = [];
  for(let i = 0 ; i < arr.length ; i++) {
    let nextLetter = arr[i+1];
    if(!nextLetter || nextLetter === ' ') {
      words.push(currentWord)
        currentWord = [i+2, i+2]
        i++
    } else {
      currentWord[1]++
    }
  }
  const reverseWord = (arr, i, j) => {
    while(i < j) {
      console.log(i, j)
      let temp = arr[i];
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }
  console.log(words);
  for(let i = 0 ; i < words.length ; i++) {
    // [0, 3]
    console.log(arr[i])
    reverseWord(arr, words[i][0], words[i][1])
  }
  return arr
}

console.log(reverseWords(message));

// console.log(message.join(''));