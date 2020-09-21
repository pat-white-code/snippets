var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

const assert = require('chai').assert;
const Stack = require('../stacks-ques/stacks');
const Queue = require('../stacks-ques/queue');
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
  describe('#pop', ()=> {
    it('should remove the first item of the stack', ()=>{
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.pop();

      expect(stack.first.val).to.equal(3)
      expect(stack.last.val).to.equal(1)
    })
    it('should return the removed node with no connections', ()=>{
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      let returned = stack.pop();

      expect(returned).to.be.an('object').with.property('val').to.equal(4);
      expect(returned).to.be.an('object').with.property('next').to.equal(null);
    })
    it('should decrement the length of the list', ()=>{
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();

      expect(stack.length).to.equal(2);
    })
    it('should return undefined on empty list', ()=>{
      let stack = new Stack();

      let returned = stack.pop();

      expect(returned).to.equal(undefined);
    })
  })
})

describe('Queues', ()=> {
  describe('#queue', ()=>{
    it('should create a new queue structure', ()=>{
      let q = new Queue()

      expect(q).to.be.an('object');
      expect(q).to.have.property('first').to.equal(null);
      expect(q).to.have.property('last').to.equal(null);
      expect(q).to.have.property('length').to.equal(0);
    })
  })
  describe('#enqueue', ()=> {
    it('should work on an empty stack', ()=>{
      let q = new Queue;
      q.enqueue(1)
      expect(q.first.val).to.equal(1);
      expect(q.last.val).to.equal(1);
      expect(q.length).to.equal(1);
    })
    it('should add to the end of the list', ()=>{
      let q = new Queue;
      q.enqueue(1)
      q.enqueue(2)
      q.enqueue(3)

      expect(q.last.val).to.equal(3);
      expect(q.first.val).to.equal(1);
      expect(q.length).to.equal(3);
    })
    it('should return the length of the list', ()=>{
      let q = new Queue;
      q.enqueue(1)
      q.enqueue(2)
      let returned = q.enqueue(3)

      expect(returned).to.equal(3);
    })
  })
})