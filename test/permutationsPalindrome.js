const { permutationsPalindrome } = require('../interview-cake/permutationPalindrome');
const { expect } = require("chai")

describe('permutationsPalindrome', ()=> {
  it('should return true if palindrome', ()=> {
    expect(permutationsPalindrome('civic')).to.equal(true)
    expect(permutationsPalindrome('cvici')).to.equal(true)
  })
  it('should return false if there is no palindrome', ()=> {
    expect(permutationsPalindrome('civil')).to.equal(false)
    expect(permutationsPalindrome('patrick')).to.equal(false)
  })
})