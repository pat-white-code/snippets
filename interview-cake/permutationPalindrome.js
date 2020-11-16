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