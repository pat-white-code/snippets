const mergeArrays = require('../../interview-cake/mergeArrays')
const { expect } = require("chai")

describe('mergeArrays', ()=> {
  it('should merge 2 ordered arrays into 1 ordered array', ()=> {
    let arr1 = [2, 6, 8, 10]
    let arr2 = [1, 4, 7, 11]

    let expected = [1, 2, 4, 6, 7, 8, 10, 11]
    let returned = mergeArrays(arr1, arr2)
    expect(returned).to.deep.equal(expected)
  })
})