const { cafeQueue } = require('../interview-cake/cafeQueue');
const { expect } = require("chai")

describe('cafeQueue', ()=> {
  it('should test of orders are first come first served', ()=> {
    expect(cafeQueue([1, 3, 5],[2, 4, 6], [1, 2, 4, 6, 5, 3])).to.equal(false);
    expect(cafeQueue([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2])).to.equal(true);
  })
})