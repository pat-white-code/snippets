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
      bst.insert(8);
      bst.insert(4);
      bst.insert(1);
      bst.insert(0);
      bst.insert(10);

      expect(bst.root.left.val).to.equal(3);
      expect(bst.root.right.val).to.equal(8);
      expect(bst.root.left.right.val).to.equal(4);
      expect(bst.root.left.left.val).to.equal(1);
      expect(bst.root.left.left.left.val).to.equal(0);
      expect(bst.root.right.right.val).to.equal(10);
    })
  })
  describe('#find', ()=>{
    it('Should return true if value is in tree', ()=>{
      let bst = new BST();
      bst.insert(5);
      bst.insert(3);
      bst.insert(4);
      bst.insert(1);
      bst.insert(2);
      bst.insert(10);

      // expect(bst.find(5)).to.equal(true)
      expect(bst.find(3)).to.equal(true)
      // expect(bst.find(2)).to.equal(true)
    })
    it('Should return false if value is not in tree', ()=>{
      let bst = new BST();
      bst.insert(5);
      bst.insert(3);
      bst.insert(4);
      bst.insert(8);

      expect(bst.find(-3)).to.equal(false)
      expect(bst.find(2)).to.equal(false)
      expect(bst.find(22)).to.equal(false)
      // expect(bst.find('Hello!')).to.equal(false)
    })
  })
  describe('#bfs', ()=>{
    it('should return the list of visited nodes', ()=>{
      let bst = new BST();
      bst.insert(5);
      bst.insert(3);
      bst.insert(4);
      bst.insert(1);
      bst.insert(2);
      bst.insert(10);
      //    5
      //  3   10
      //1   4
      //  2
      let returned = bst.bfs();
      let expected = [5, 3, 10, 1, 4, 2]
      expect(returned).to.deep.equal(expected);
    })
  })
  describe('#depth-first-search', ()=>{
    it('Should traverse depth first', ()=> {
      let bst = new BST()
      bst.insert(5)
      bst.insert(3)
      bst.insert(8)
      bst.insert(2)
      bst.insert(7)
      bst.insert(10)
      bst.insert(9)
      bst.insert(1)
      bst.insert(4)

      let actual = bst.dfsPre();
      let expected = [5, 3, 2, 1, 4, 8, 7, 10, 9]
      //      5
      //   3    8
      //  2 4 7  10
      //1       9
      expect(actual).to.deep.equal(expected)
    })
  })
  describe('#depth-first-POST', ()=>{
    it('Should traverse depth first, POST', ()=> {
      let bst = new BST()
      bst.insert(5)
      bst.insert(3)
      bst.insert(8)
      bst.insert(2)
      bst.insert(7)
      bst.insert(10)
      bst.insert(9)
      bst.insert(1)
      bst.insert(4)

      let actual = bst.dfsPre();
      let expected = [1, 2, 4, 9, 7, 10, 3, 8, 5]
      //      5
      //   3    8
      //  2 4 7  10
      //1       9
      expect(actual).to.deep.equal(expected)
    })
  })
})