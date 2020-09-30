// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// str.split(' ')
// ['1', '2', '3' ...]
// .map(parseInt(str))
// 

const highAndLow = (str) => {
  let ints = str.split(' ').map(num => parseInt(num));
  let greatest = Math.max(...ints).toString();
  let smallest = Math.min(...ints).toString();
  return `${greatest} ${smallest}`
};

const highAndLow = (str) => {
  let greatest = str[0];
  let smallest = str[0];
  for(let i = 0 ; i < str.length ; i++) {
    let num = str[i]
    if(parseInt(str[i])) {
      // console.log(num);
      greatest = Math.max(parseInt(num), parseInt(greatest)).toString();
      smallest = Math.min(parseInt(num), parseInt(smallest)).toString();
    }
  }
  return greatest + ' ' + smallest
}

console.log(highAndLow("1 2 3 4 5"))
console.log(highAndLow("1 2 -3 4 5"))
console.log(highAndLow("1 9 3 4 -5"))

