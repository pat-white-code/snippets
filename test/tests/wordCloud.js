const { wordCloud } = require('../../interview-cake/wordCloud');
const { expect } = require("chai")

describe('wordCloud', ()=> {
  it('should return map of words', ()=> {
    let returned = wordCloud("Add milk and eggs, then add flour and sugar.");
    let expected = new Map() 
    expected["add"] = 2;
    expected["milk"] = 1;
    expected["and"] = 2;
    expected["eggs"] = 1;
    expected["then"] = 1;
    expected["flour"] = 1;
    expected["sugar"] = 1;
    expect(returned).to.deep.equal(expected)
  })
})