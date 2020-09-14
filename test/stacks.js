var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

const assert = require('chai').assert;
const Stack = require('../stacks-ques/stacks');
// const should = require('chai').should()
// const Node = require('../doubly-linked-lists/Node');
// const expect = require('chai').expect;

describe('Stacks', ()=> {
  describe('#stack', ()=> {
    it('should create a new stack structure', ()=>{
      let stack = new Stack();

      expect(stack).to.be.an('object').with.property('first').to.equal(null);
      expect(stack).to.be.an('object').with.property('last').to.equal(null);
      expect(stack).to.be.an('object').with.property('length').to.equal(0);
    })
  })
  describe('#push', ()=> {
    it('should add new nodes to the beginning of the list', ()=>{
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.first.val).to.equal(3)
      expect(stack.last.val).to.equal(1)
    })
  })
})