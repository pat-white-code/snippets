const { findRotationPoint } = require('../interview-cake/findRotationPoint');
const { featuredProduct, minX } = require('../interview-cake/rabbet');
const { expect } = require("chai")

// describe('findRotationPoint', ()=> {
//   it('should find the correct rotationpoint', ()=> {
//   const arr = [5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4]

//   const returned = findRotationPoint(arr)

//   expect(returned).to.equal(0);
//   })
//   it('should find the correct rotationpoint', ()=> {
//   const arr = [7, 8, 9, 10, 2, 3, 4, 5, 6]

//   const returned = findRotationPoint(arr)

//   expect(returned).to.equal(0);
//   })
// })

describe('rabbet', ()=> {
  it('should get the right answer', ()=> {
    const input = [
      'greenShirt',
      'bluePants',
      'redShirt',
      'blackShoes',
      'redPants',
      'redPants',
      'whiteShirt',
      'redShirt']
    let returned = featuredProduct(input);
    expect(returned).to.equal('redShirt');
  })
})
describe('minX', ()=> {
  it('should get the right answer', ()=> {
    const input = [
      -5,
      4,
      -2,
      3,
      1,
      -1,
      -6,
      -1,
      0,
      5
    ]
    let returned = minX(input);
    expect(returned).to.equal(8);
  })
})