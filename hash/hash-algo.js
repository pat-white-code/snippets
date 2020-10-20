// write a simple hash function, that takes a string and a number and converts the string to a number between 0 and the given number. must follow principles of hashing.

// -evenly distributed
// -returns the same output for the same input

const hash = (str, n) => {
  let output = 0;
  // calculate total numerical value for given word
  for(let i = 0 ; i < str.length ; i++) {
    output += str.charCodeAt(i);
  }
  // simplifies number within bounds of 0 and n;
  return output % n
}
console.log(hash('semicolon', 8));
console.log(hash('semicolon', 10));
console.log(hash('semicolon', 15));
console.log(hash('semicolon', 50));
console.log(hash('semicolon', 100));
console.log(hash('semicolon', 500));