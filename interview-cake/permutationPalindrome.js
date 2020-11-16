const permutationPalindrome = (str) => {
  let obj = {};
  let odds = 0;
  for(let i = 0 ; i < str.length ; i++) {
    let letter = str[i];
    if(obj[letter]) { 
      obj[letter]++;
      if(obj[letter] % 2 === 0) {
        odds--
      } else {
        odds++
      }
    } else {
      obj[letter] = 1;
      odds++
    }
  }
  if(odds > 1) return false;
  return true;
}

module.exports = {
  permutationPalindrome
}


// function hasPalindromePermutation(theString) {

//   // Track characters we've seen an odd number of times
//   const unpairedCharacters = new Set();

//   for (let char of theString) {
//     if (unpairedCharacters.has(char)) {
//       unpairedCharacters.delete(char);
//     } else {
//       unpairedCharacters.add(char);
//     }
//   }

//   // The string has a palindrome permutation if it
//   // has one or zero characters without a pair
//   return unpairedCharacters.size <= 1;
// }