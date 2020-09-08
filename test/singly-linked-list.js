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
  describe('#unshift', ()=>{
    it('should re-assign the inserted value as the new head', ()=>{
      let newList = new SinglyLinkedList;
      newList.push(1)
      newList.push(2)
      newList.push(3)
      newList.unshift(4);

      assert.equal(newList.head.val, 4)
      assert.equal(newList.head.next.val, 1)
    })
    it('should increment the list by 1', ()=>{
      let newList = new SinglyLinkedList();
      newList.push(1);
      newList.unshift(2);

      assert.equal(newList.length, 2);
    })
    it('should work with empty lists', ()=>{
      let newList = new SinglyLinkedList();

      newList.unshift(1)

      assert.deepEqual(newList.head, {val: 1, next: null});
      assert.deepEqual(newList.tail, {val: 1, next: null});
    })
    it('should work with 1-item lists', ()=>{
      let newList = new SinglyLinkedList;
      newList.push(1);
      newList.unshift(2);

      assert.deepEqual(newList.tail, {val:1, next: null});
      assert.deepEqual(newList.head, {val:2, next: {val:1, next: null}});
    })
    it('should return the list', ()=>{
      let newList = new SinglyLinkedList();
      newList.push(1);
      newList.push(2);
      let returned = newList.unshift(3);
      let expected = {head:{val:3, next: {val: 1, next: {val: 2, next: null}}}, tail:{ val: 2, next: null}, length: 3}

      assert.deepEqual(returned, expected);
    })
  })
  describe('#get', ()=> {
    it('should return the targeted node at the given index', ()=>{
      let newList = new SinglyLinkedList();
      newList.push(1);
      newList.push(2);
      newList.push(3);

      let returned = newList.get(2);
      let expected = {val: 3, next: null};

      assert.deepEqual(returned, expected);
    })
    it('shoudl return undefined if index is erroneous', ()=>{
      let newList = new SinglyLinkedList();
      newList.push(1);
      newList.push(2);
      newList.push(3);

      let negNum = newList.get(-1)
      let tooBig = newList.get(5)

      assert.equal(negNum, undefined);
      assert.equal(tooBig, undefined);
    })
  })
  describe('#set', ()=> {
    it('should change the value of a given index', ()=> {
      let list = new SinglyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)

      list.set(1, 4);

      let actual = list.get(1).val;
      let expected = 4;

      assert.equal(actual, expected);
    })
    it('should return true if the index is valid', ()=>{
      let list = new SinglyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)

      let actual = list.set(0, 4);
      let expected = true;

      assert.equal(actual, expected);
    })
    it('should return false if the index is not valid', ()=>{
      let list = new SinglyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)

      list.set(0);
      let actual1 = list.set(5, 4);
      let expected1 = false;

      let actual2 = list.set(-1, 4);
      let expected2 = false;

      assert.equal(actual1, expected1);
      assert.equal(actual2, expected2);
    })
  })
  describe('#insert', ()=> {
    it('should insert a new node at the given index', ()=>{
      let list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      list.insert(1, 4);
      let inserted = list.get(1);
      let expected = 4;

      assert.equal(inserted.val, expected);
      assert.equal(inserted.next.val, 2);
      assert.equal(list.get(0).next.val, 4);
    })
    it('should increase the list of the list', ()=>{
      let list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insert(1, 4);

      let actual = list.length
      let expected = 4;

      assert.equal(actual, expected);
    })
    it('should work on empty lists', ()=>{
      let list = new SinglyLinkedList();
      list.insert(0, 'insert');

      let actualHead = list.head.val;
      let expectedHead = 'insert';

      let actualTail = list.tail.val;
      let expectedTail = 'insert';

      let actualLength = list.length;
      let expectedLength = 1;

      assert.equal(actualHead, expectedHead);
      assert.equal(actualLength, expectedLength);
      assert.equal(actualTail, expectedTail);
    })
  })
  describe('#remove', ()=> {
    it('should remove the targeted node from the linked list', ()=>{
      let list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.remove(1);

      let actual = list.get(1).val;
      let expected = 3;

      assert.equal(actual, expected);
    })
    it('should change the tail if needed', ()=>{
      let list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.remove(2);

      let actualTail = list.tail.val;
      let expectedTail = 2;
      
      assert.equal(actualTail, expectedTail);
    })
    it('should change the head if needed', ()=>{
      let list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.remove(0);

      let actualHead = list.head.val;
      let expectedHead = 2;

      assert.equal(actualHead, expectedHead);
    })
    it('should return the removed', ()=>{
      let list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      
      let actualReturn = list.remove(1).val;
      let expectedReturn = 2;

      assert.equal(actualReturn, expectedReturn);
    })
  })
  describe('#reverse', ()=> {
    it('should reverse the order of the nodes', ()=>{
      let list = new SinglyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)
      
      list.reverse();

      let actual0 = list.get(0).val
      let actual1 = list.get(1).val
      let actual2 = list.get(2).val
      let actual3 = list.get(3).val

      let expected0 = 4;
      let expected1 = 3;
      let expected2 = 2;
      let expected3 = 1;

      assert.equal(actual0, expected0)
      assert.equal(actual1, expected1)
      assert.equal(actual2, expected2)
      assert.equal(actual3, expected3)
    })
    it('should swap the head and the tail', ()=>{
      let list = new SinglyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)

      list.reverse();

      let actualHead = list.head.val
      let actualTail = list.tail.val

      let expectedHead = 4;
      let expectedTail = 1;

      assert.equal(actualHead, expectedHead)
      assert.equal(actualTail, expectedTail)
    })
  })
})