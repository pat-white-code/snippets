const chai = require('chai'),
  expect = chai.expect, 
  should = chai.should();

const BST = require('../binary-search-trees/binary-search-tree');

describe('Binary Search Tree', ()=>{
  describe('#constructor', ()=>{
    it('Should create a BST structure', ()=>{
      let bst = new BST();
      expect(bst).to.be.an('object');
      expect(bst).to.have.property('root');
      expect(bst.root).to.equal(null);
    })
  })
  describe('#insert', ()=>{
    it('Should work on an empty bst', ()=>{
      let bst = new BST();
      bst.insert(5);

      expect(bst).to.be.an('object');
      expect(bst).to.have.property('root');
      expect(bst.root.val).to.equal(5);
    })
    it('Should insert values at the correct spot', ()=>{
      let bst = new BST();
      bst.insert(5);
      bst.insert(3);
      bst.insert(4);
      bst.insert(1);
      bst.insert(2);
      bst.insert(8);
      bst.insert(7);

      // 

      expect(bst.left.val).to.equal(3);
      expect(bst.left.right.val).to.equal(4);
      expect(bst.left.left.val).to.equal(1);
      expect(bst.left.left.right.val).to.equal(2);
      expect(bst.right.val).to.equal(8);
      expect(bst.right.left.val).to.equal(7);
      expect(bst).to.have.property('root');
      expect(bst.root.val).to.equal(5);
    })
  })
})