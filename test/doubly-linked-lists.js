const assert = require('chai').assert
const DoublyLinkedList = require('../doubly-linked-lists/DoublyLinkedLists');
const should = require('chai').should()
const Node = require('../doubly-linked-lists/Node');


describe('Doubly Linked Lists', ()=> {
  describe('Nodes', ()=>{
    it('Should create nodes with next and prev properties', ()=>{
      let node = new Node(1);

      node.should.have.property('next');
      node.should.have.property('prev');
      node.should.have.property('val');

    })
  })
})