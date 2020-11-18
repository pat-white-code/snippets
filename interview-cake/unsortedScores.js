// Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

// For example:

//   const unsortedScores = [37, 89, 41, 65, 91, 53];
// const HIGHEST_POSSIBLE_SCORE = 100;

// sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// // returns [91, 89, 65, 53, 41, 37]

// JavaScript
// We’re defining nn as the number of unsortedScores because we’re expecting the number of players to keep climbing.

// And, we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.

// const sortScores = (arr, highestScore) => {
//   // highestScore: 100
//   // arr: [42, 64, 13, 91, 91, 77]
//   // iterate through the array, and save values to an object
//   // {42: 1, 64: 1, 13: 1, 91: 2, 77: 1}
//   // then we count down from highestScore
//   // do we have any 100s? if so add it to the array, and decrement 100, keep counter at 100 so you can ask again if there are any more 100s?
//   let obj = {}
//   let sorted = []
//   for(let i = 0; i <arr.length; i++) {
//     let score = arr[i];
//     if(obj[score]) {
//       obj[score]++
//     } else {
//       obj[score] = 1;
//     }
//   }
//   console.log(obj);
//   let best = highestScore;
//     while(best >= 0) {
//       // console.log(best)
//       if(obj[best]) {
//         // console.log(best);
//         sorted.push(best)
//         obj[best]--
//       } else {
//         best--
//       }
//     }
//   return sorted;
// }

function sortScores(unorderedScores, highestPossibleScore) {

  // Array of 0s at indices 0..highestPossibleScore
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  // Populate scoreCounts
  unorderedScores.forEach(score => {
    scoreCounts[score]++;
  });

  // Populate the final sorted array
  const sortedScores = [];

  // For each item in scoreCounts
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}

module.exports = {
  sortScores
}