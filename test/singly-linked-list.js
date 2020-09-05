// const assert = require('assert');
const assert = require('chai').assert
const SinglyLinkedList = require('../singly-linked-lists/SinglyLinkedList');
const should = require('chai').should()

describe('Singly Linked Lists', ()=>{
  describe('#push', ()=>{
    it('Should add an item to the end of the list', ()=>{
      let newList = new SinglyLinkedList();
      newList.push(1)
      newList.push(2)
      newList.push(3);

      let expected = {val: 3, next: null};
      let actual = newList.tail;

      assert.deepEqual(expected, actual)
    })

    it('should assign new Node as head to an empty list', ()=>{
      let newList = new SinglyLinkedList();
      newList.push('a');

      let expected = {val: 'a', next:null};
      let actual = newList.head;

      assert.deepEqual(expected, actual);
    })
    it('Should assign new Node as tail of a list', ()=>{
      let newList = new SinglyLinkedList();
      newList.push('a');
      newList.push('b');
      newList.push('c');

      let expected = {val: 'c', next:null};
      let actual = newList.tail;

      assert.deepEqual(expected, actual);
    })
    // it('should should update the list length', ()=>{})
  })
  describe('#pop', ()=>{
    it('should return the last node of the list', ()=>{
      let newList = new SinglyLinkedList;
      newList.push(1)
      newList.push(2)
      newList.push(3)

      let removed = newList.pop()
      let expected = {val: 3, next:null};

      assert.deepEqual(removed, expected);
    })
    it('should reduce the size of the list by 1', ()=>{
      let newList = new SinglyLinkedList;
      newList.push(1)
      newList.push(2)
      newList.push(3)
      newList.pop();

      let actual = newList.length;
      let expected = 2;

      assert.deepEqual(actual, expected);
    })
    it('should remove the removed node', ()=>{
      let newList = new SinglyLinkedList();

      newList.push(1);
      newList.pop();

      let actual = newList.head;
      let expected = undefined;

      assert.equal(actual, expected);
    }) 
  })
  describe('#shift', ()=>{
    it('should return the first node of the list', ()=>{
      let newList = new SinglyLinkedList;
      newList.push(1)
      newList.push(2)
      newList.push(3)

      let returned = newList.shift();
      let expected = 1;

      returned.val.should.equal(expected)
    })
    it('should reduce the size of the list by 1', ()=>{
      let newList = new SinglyLinkedList;
      newList.push(1)
      newList.push(2)
      newList.push(3)
      newList.shift();

      // let actual = newList.length;
      // let expected = 2;

      newList.length.should.equal(2);
    })
    it('should work with single node list', ()=>{
      let newList = new SinglyLinkedList();

      newList.push(1);
      newList.shift();

      assert.equal(newList.head, null);
      assert.equal(newList.tail, null);
      assert.equal(newList.length, 0);
    })
    it('should reset the new head', ()=>{
      let newList = new SinglyLinkedList();

      newList.push(1);
      newList.push(2);
      newList.push(3);
      newList.shift();

      assert.equal(newList.head.val, 2);
    })
    it('should return undefined if list is empty', ()=>{
      let newList = new SinglyLinkedList;
      let returned = newList.shift();
      assert.equal(returned, undefined);
    })
  })
})