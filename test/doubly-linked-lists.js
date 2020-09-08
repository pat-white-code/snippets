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
  describe('#Pop', ()=> {
    it('should remove the last node of the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)

      list.pop();
      let removed = !list.contains(3);

      expect(list).to.be.an('object').with.property('length').to.equal(2);
      expect(list).to.be.an('object').with.property('tail').to.be.an('object').with.property('val').to.equal(2);
      expect(removed).to.equal(true);

    })
    it('should return the popped node with no connection to the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      
      let returned = list.pop();

      expect(returned).to.be.an('object').with.property('val').to.equal(3);
      expect(returned).to.be.an('object').with.property('next').to.equal(null);
      expect(returned).to.be.an('object').with.property('prev').to.equal(null);
    })
    it('should return undefined with an empty list', ()=>{
      let list = new DoublyLinkedList();
      let returned = list.pop();

      expect(returned).to.equal(undefined);
    })
    it('should update head on single item list', ()=> {
      let list = new DoublyLinkedList();
      list.push(1);
      list.pop();

      expect(list).to.be.an('object').with.property('head').to.equal(null);
    })
  })
  describe('#contains', ()=> {
    it('should return true if a node with the given value is present in the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      let returned = list.contains(2)

      expect(returned).to.be.a('boolean');
      expect(returned).to.equal(true);
    })
    it('should return false if a node with the given value is absent from list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      let returned = list.contains(5)

      expect(returned).to.be.a('boolean');
      expect(returned).to.equal(false);
    })
    it('should return false if list is empty', ()=>{
      let list = new DoublyLinkedList();

      let returned = list.contains(5)

      expect(returned).to.be.a('boolean');
      expect(returned).to.equal(false);
    })
  })
})