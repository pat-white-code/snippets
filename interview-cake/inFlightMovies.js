// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory


const inFlightMovies = (flightLength, moviesArr) => {
  // create an empty obj
  // iterate throught the arr
  // for each movie in the arr, create a key for the object. the value should equal the key
  // flightLength[23] = 23
  // {20: 2,
  //  10: 1,
  //  14: 1

  // then, iterate through the object
  // subtract the target value from the current key value
  // 30 - 20 = 10
  // if the value is 1/2 of target, see if there is another with the same length, ie number greater than 1
  // otherwise, just see if there is a key at obj[10]
  const obj = {}
  moviesArr.forEach(movie => {
    if(obj[movie]) {
      obj[movie]++
    } else {
      obj[movie] = 1
    }
  })
  for(let movie in obj) {
    let length = parseInt(movie)
    let target = (flightLength - length)
    console.log('length, target: ', length, target)
    if(target === flightLength / 2) {
      if(obj[target] > 1) return true
    } else {
      if(obj[target]) return true
    }
  }
  return false
}

module.exports = {
  inFlightMovies
}