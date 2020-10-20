const chai = require('chai'), expect = chai.expect;


describe('reverse-in-place', ()=> {
  it('should reverse the array', ()=> {
    let returned = reverse(['p', 'a', 't', 'r', 'i', 'c', 'k'])

    expect(returned).to.deep.equal('k', 'c', 'i', 'r', 't', 'a', 'p')
  })
})
