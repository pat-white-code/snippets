function solve(str) {
  // initialize current to the str[0];
  // create variable called count to 0;
  // iterate through the string starting at index 1;
  // if the string at index[i] === current;
  //  increment count;
  // else, set current = index[i];
  // return count;
  let current = str[0];
  let count = 0;
  for(let i = 1; i < str.length ; i++) {
    if(str[i] === current) {
      count++
    } else {
      current = str[i];
    }
  }
  return count;
}

module.exports = solve;
//  "GBBBGGRRGRB"
// 4
