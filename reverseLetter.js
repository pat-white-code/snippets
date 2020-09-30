// function reverseLetter(str) {
//   let output = '';
//   //coding and coding..
//   //iterate from the end of the string to the beginning.
//   //if the letter at the index matches regex, then add it to the new string
//   let regex = /[a-zA-Z]/
//   // this regex will match any letter a-z A-Z
//   for(let i = str.length -1 ; i >= 0 ; i--) {
//     let char = str[i];
//     if(regex.test(char)){
//       output += char;
//     }
//   }
//   return output;
// }

function reverseLetter(str) {
  return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
}

console.log(reverseLetter("ab23c"));
console.log(reverseLetter("krish21an"));
console.log(reverseLetter("ultr53o?n"));