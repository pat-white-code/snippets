const { sortScores } = require('../../interview-cake/unsortedScores');
const { expect } = require("chai")

describe('unsorted scores', ()=> {
  it('should sort the scores', ()=> {
  const unsortedScores = [37, 89, 89, 41, 65, 91, 91, 53];
  const HIGHEST_POSSIBLE_SCORE = 100;

  const returned = sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)
  const expected = [91, 91, 89, 89, 65, 53, 41, 37]

  expect(returned).to.deep.equal(expected);
  })
})