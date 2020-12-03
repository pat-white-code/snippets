const { permutationPalindrome } = require('../../interview-cake/permutationPalindrome');
const { expect } = require("chai")

describe('permutationsPalindrome', ()=> {
  it('should return true if palindrome', ()=> {
    expect(permutationPalindrome('civic')).to.equal(true)
    expect(permutationPalindrome('cvici')).to.equal(true)
  })
  it('should return false if there is no palindrome', ()=> {
    expect(permutationPalindrome('civil')).to.equal(false)
    expect(permutationPalindrome('patrick')).to.equal(false)
  })
})