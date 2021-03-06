var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

const assert = require('chai').assert
const DoublyLinkedList = require('../../doubly-linked-lists/DoublyLinkedLists');
// const should = require('chai').should()
const Node = require('../../doubly-linked-lists/Node');
// const expect = require('chai').expect;


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
  describe('#shift', ()=>{
    it('should remove the first node from the linked list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      list.shift()
      let removed = !list.contains(1);

      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('val').to.equal(2);
      expect(removed).to.equal(true)
    })
    it('should decrement the length of the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      list.shift()

      expect(list).to.be.an('object').with.property('length').to.equal(2);
    })
    it('should reassign the head', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      list.shift()

      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('val').to.equal(2);
    })
    it('should reassign the tail for single node list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);

      list.shift()

      expect(list).to.be.an('object').with.property('head').to.equal(null);
      expect(list).to.be.an('object').with.property('tail').to.equal(null);
      expect(list).to.be.an('object').with.property('length').to.equal(0);
    })
    it('should return undefined if list is empty', ()=>{
      let list = new DoublyLinkedList();

      let returned = list.shift()

      expect(returned).to.equal(undefined);
    })
    it('should return the removed node', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      let returned = list.shift();
      let removed = !list.contains(1);

      expect(returned).to.be.an('object').with.property('val').to.equal(1);
      expect(returned).to.be.an('object').with.property('next').to.equal(null);
      expect(returned).to.be.an('object').with.property('prev').to.equal(null);
      expect(removed).to.equal(true);
    })
    it('should sever connection from new head', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.shift();

      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('prev').to.equal(null);
      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('val').to.equal(2);
    })
  })
  describe('#unshift',()=>{
    it('should insert new node at head of list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.unshift(4)

      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('val').to.equal(4)
      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('next').to.be.an('object').with.property('val').to.equal(1)

    })
    it('should increment the length of the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)

      list.unshift(4)

      expect(list).to.be.an('object').with.property('length').to.equal(4)
    })
    it('should work on empty list', ()=>{
      let list = new DoublyLinkedList();

      list.unshift(4);

      expect(list).to.be.an('object').with.property('length').to.equal(1);
      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('val').to.equal(4);
      expect(list).to.be.an('object').with.property('tail').to.be.an('object').with.property('val').to.equal(4);
    })
    it('should return the list', ()=>{
      let list = new DoublyLinkedList();

      let returned = list.unshift(1)

      expect(returned).to.be.an('object').with.property('head').to.be.an('object');
      expect(returned).to.be.an('object').with.property('tail').to.be.an('object');
      expect(returned).to.be.an('object').with.property('length');
    })
  })
  describe('#get', ()=> {
    it('should return the targeted node', ()=> {
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)
      list.push(5)

      let returned = list.get(1);

      expect(returned).to.be.an('object').with.property('val').to.equal(2)
    })
    it('should return the targeted node from end of the list', ()=> {
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)
      list.push(5)

      let returned = list.get(3);

      expect(returned).to.be.an('object').with.property('val').to.equal(4)
    })
    it('should return the targeted node from the middle of the list', ()=> {
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)
      list.push(5)

      let returned = list.get(2);

      expect(returned).to.be.an('object').with.property('val').to.equal(3)
    })
    it('should return undefined for gt length', ()=> {
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)
      list.push(5)

      let returned = list.get(10);

      expect(returned).to.equal(undefined)
    })
    it('should return undefined for negative input', ()=> {
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)
      list.push(5)

      let returned = list.get(-1);

      expect(returned).to.equal(undefined)
    })
  })
  describe('#set', ()=>{
    it('should reset the value of the node at a given index',()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.set(1, 'a');
      let setNode = list.get(1);

      expect(setNode).to.be.an('object').with.property('val').to.equal('a');
    } )
    it('should return true for valid',()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      let returned = list.set(1, 'a');

      expect(returned).to.equal(true)
    } )
    it('should return false for invalid',()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      let returned = list.set(5, 'a');

      expect(returned).to.equal(false)
    } )
    it('should return false for negative',()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      let returned = list.set(-1, 'a');

      expect(returned).to.equal(false)
    } )
  })
  describe('#insert', ()=>{
    it('should insert the new node at the correct place', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      list.insert(2, 'a');
      let found = list.get(2);
      // console.log(list);

      expect(found).to.be.an('object').with.property('val').to.equal('a');
      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('prev').to.equal(null);
      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('prev').to.equal(null)
    })
    it('should increment the length of the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      list.insert(1, 'a');

      expect(list).to.be.an('object').with.property('length').to.equal(4);
    })
    it('should return true when valid', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      let returned = list.insert(1, 'a');

      expect(returned).to.equal(true);
    })
    it('should return false when invalid', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      let tooBig = list.insert(5, 'a');
      let negative = list.insert(-1, 'a');

      expect(tooBig).to.equal(false);
      expect(negative).to.equal(false);
    })
    it('should work at the beginning', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insert(0, 'a');
      let head = list.head;

      expect(head).to.be.an('object').with.property('val').to.equal('a');
      expect(head).to.be.an('object').with.property('prev').to.equal(null);
    })
    it('should work at the end', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      list.insert(3, 'a');
      let tail = list.tail;

      expect(tail).to.be.an('object').with.property('val').to.equal('a');
      expect(tail).to.be.an('object').with.property('next').to.equal(null);
    })
  })
  describe('#remove',()=>{
    it('should remove the targeted item from the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push('remove this');
      list.push(4);

      list.remove(2);

      let removed = !list.contains('remove this');
      expect(removed).to.equal(true);

    })
    it('should decrement the length of the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push('remove this');
      list.push(4);

      list.remove(2);

      expect(list.length).to.equal(3);
    })
    it('should maintain list connections', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push('remove this');
      list.push(4);

      list.remove(2);
      let first = list.get(0);
      let second = list.get(1);
      let third = list.get(2);

      expect(first.next).to.deep.equal(second);
      expect(first.prev).to.equal(null);
      expect(second.prev).to.deep.equal(first);
      expect(second.next).to.deep.equal(third);
      expect(third.prev).to.deep.equal(second);
      expect(third.next).to.equal(null);
    })
    it('should return the removed node with no connections', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push('remove this');
      list.push(4);

      let returned = list.remove(2);

      expect(returned).to.be.an('object').with.property('val').to.equal('remove this');
      expect(returned).to.be.an('object').with.property('next').to.equal(null);
      expect(returned).to.be.an('object').with.property('prev').to.equal(null);
    })
    it('should return undefined for invalid', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      let returned = list.remove(5);

      expect(returned).to.equal(undefined)
      expect(list.length).to.equal(3)
    })
    it('should work on the head', ()=>{
      let list = new DoublyLinkedList();
      list.push('remove this');
      list.push(1);
      list.push(2);
      list.push(3);
      list.remove(0);
      
      expect(list.head.val).to.equal(1);
    })
    it('should work on the tail', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push('remove this');
      list.remove(3);
      
      expect(list.tail.val).to.equal(3);
    })
  })
  describe('#reverse',()=>{
    it('should reverse the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)
      list.reverse();

      let first = list.get(0).val
      let second = list.get(1).val
      let third = list.get(2).val
      let fourth = list.get(3).val

      expect(first).to.equal(4)
      expect(second).to.equal(3)
      expect(third).to.equal(2)
      expect(fourth).to.equal(1)
    })
    it('should maintain list connections', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.reverse();

      let first = list.get(0);
      let second = list.get(1);
      let third = list.get(2);

      expect(first.next).to.deep.equal(second);
      expect(first.prev).to.equal(null);
      expect(second.prev).to.deep.equal(first);
      expect(second.next).to.deep.equal(third);
      expect(third.prev).to.deep.equal(second);
      expect(third.next).to.equal(null);
    })
    it('should switch head/tail', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.reverse();

      expect(list).to.be.an('object').with.property('head').to.be.an('object').with.property('val').to.equal(3)
      expect(list).to.be.an('object').with.property('tail').to.have.property('val').to.equal(1);
    })
    it('should return the list', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      let returned = list.reverse();

      expect(returned).to.be.an('object').with.property('head');
      expect(returned).to.be.an('object').with.property('tail');
      expect(returned).to.be.an('object').with.property('length');
    })
    it('should return undefined if list is empty', ()=>{
      let list = new DoublyLinkedList();
      let returned = list.reverse();

      expect(returned).to.equal(undefined);
    })
  })
  describe('#swap', ()=>{
    it('should swap the 2 nodes at given indices', ()=>{
      let list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      list.swap(1,3);

      let swap1 = list.get(1);
      let swap2 = list.get(3);

      expect(swap1.val).to.equal(4);
      expect(swap2.val).to.equal(2);
    })
    it('should maintain list connections', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.swap(0,2);

      let first = list.get(0);
      let second = list.get(1);
      let third = list.get(2);

      expect(first.next).to.deep.equal(second);
      expect(first.prev).to.equal(null);
      expect(second.prev).to.deep.equal(first);
      expect(second.next).to.deep.equal(third);
      expect(third.prev).to.deep.equal(second);
      expect(third.next).to.equal(null);
    })
    it('should return true if valid, false if not', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);

      let returnTrue = list.swap(0,2);
      let returnFalse = list.swap(0,6);
      let returnNegative = list.swap(-1,2);

      expect(returnTrue).to.equal(true)
      expect(returnFalse).to.equal(false)
      expect(returnNegative).to.equal(false)
    })
    it('should reassign head/tail if needed', ()=>{
      let list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      list.swap(0, 2);
      list.swap(1, 3);

      expect(list.head.val).to.equal(3);
      expect(list.tail.val).to.equal(2);
    })
  })
})