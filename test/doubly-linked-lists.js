const assert = require('chai').assert
const DoublyLinkedList = require('../doubly-linked-lists/DoublyLinkedLists');
const should = require('chai').should()
const Node = require('../doubly-linked-lists/Node');
const expect = require('chai').expect;


describe('Doubly Linked Lists', ()=> {
  describe('Nodes', ()=>{
    it('Should create nodes with next and prev properties', ()=>{
      let node = new Node(1);

      node.should.have.property('next');
      node.should.have.property('prev');
      node.should.have.property('val');

    })
  })
  describe('#Push', ()=>{
    it('Should reassign the head/tail of an empty list', ()=>{
      let list = new DoublyLinkedList();

      list.push(1);
      let actualHead = list.head.val;
      let actualTail = list.tail.val;

      expect(actualHead).to.equal(1);
      expect(actualTail).to.equal(1);
    })
    it('Should increase the length of the list', ()=>{
      let list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      let actual = list.length;
      let expected = 3;

      expect(actual).to.equal(expected);
    })
    it('Should return the new list', ()=>{
      let list = new DoublyLinkedList();

      list.push(1);
      list.push(2);

      let returned = list.push(3);

      expect(returned).to.be.an('object');
      expect(returned).to.have.property('length').to.equal(3);
      expect(returned).to.have.property('head').to.be.an('object').with.property('val').to.equal(1);
      expect(returned).to.have.property('tail').to.be.an('object').with.property('val').to.equal(3);
    })
  })
})