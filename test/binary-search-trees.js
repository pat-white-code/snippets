const chai = require('chai'),
  expect = chai.expect, 
  should = chai.should();

const BST = require('../binary-search-trees/binary-search-tree');

describe('Binary Search Tree', ()=>{
  describe('BST', ()=>{
    it('Should create a BST structure', ()=>{
      let bst = new BST();
      expect(bst).to.be.an('object');
      expect(bst).to.have.property('root');
      expect(bst.root).to.equal(null);
    })
  })
})