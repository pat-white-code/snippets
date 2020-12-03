const { maxProduct } = require('../../interview-cake/maxProduct');
const { expect } = require("chai")

describe('max product', ()=> {
  it('should return the max product of 3', ()=> {
  const arr = [1, 10, -5, 1, -100]

  const returned = maxProduct(arr)

  expect(returned).to.equal(5000);
  })
})


maxProduct([1, 10, -5, 1, -100])