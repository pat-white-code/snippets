const chai = require('chai'),
  expect = chai.expect, 
  should = chai.should();

const PriorityQueue = require('../priorityQueue/priorityQueue');
const Node = require('../priorityQueue/queueNode');

describe('# PriorityQueue', ()=> {
  describe('#Class Constructor', ()=> {
    it('should create a priority queue', ()=> {
      let pq = new PriorityQueue();

      expect(pq).to.be.an('object');
      expect(pq).to.have.property('values');
    })
  })
  describe('#enqueue', ()=> {
    it('should work on empty queues', ()=>{
      let pq = new PriorityQueue();

      pq.enqueue('gun shot wound', 100);
      let expected = [
        { val: 'gun shot wound', priority: 100 }
      ]

      expect(pq.values).to.deep.equal(expected);
    })
    it('should put items in the correct spot', ()=>{
      let pq = new PriorityQueue();

      pq.enqueue('headache', 55);
      pq.enqueue('tummy-ache', 24);
      pq.enqueue('medium fever', 31);
      pq.enqueue('hangover', 12);
      pq.enqueue('case of the mondays', 7);
      pq.enqueue('migrane', 20);
      pq.enqueue('Gun shot wound', 100);

       //     7
      //   12     20
      // 55  24  31  100

      let expected  = [
        {val: 'case of the mondays', priority: 7},
        {val: 'hangover', priority: 12},
        {val: 'migrane', priority: 20},
        {val: 'headache', priority: 55},
        {val: 'tummy-ache', priority: 24},
        {val: 'medium fever', priority: 31},
        {val: 'Gun shot wound', priority: 100}
      ]

      expect(pq.values).to.deep.equal(expected);
    })
  })
  describe('#dequeue', ()=> {
    it('should return the head of the heap', ()=>{
      let pq = new PriorityQueue();

      pq.enqueue('one hundred', 100)
      pq.enqueue('ninety', 90)
      pq.enqueue('eighty', 80)
      pq.enqueue('seventy', 70)
      pq.enqueue('sixty', 60)
      pq.enqueue('fifty', 50)
      pq.enqueue('forty', 40)

        //    40
      //   70    50
      // 100 80  90  60
      // [40, 70, 50, 100, 80, 90, 60]

      let first = pq.dequeue();
      let second = pq.dequeue();
      let third = pq.dequeue();

      expect(first).to.deep.equal({val: 'forty', priority: 40});
      expect(second).to.deep.equal({val: 'fifty', priority: 50});
      expect(third).to.deep.equal({val: 'sixty', priority: 60});
    })
    
    it('should reorder the heap accordingly', ()=>{
      let mbh = new MaxBinaryHeap();

      mbh.insert(100)
      mbh.insert(90)
      mbh.insert(80)
      mbh.insert(70)
      mbh.insert(60)
      mbh.insert(50)
      mbh.insert(40)

        //    100
      //   90    80
      // 70 60  50  40
      // [100, 90, 80, 70, 60, 50, 40]

      //      90
      //   70    80
      // 40 60  50 

      mbh.extract();
      let expected = [90, 70, 80, 40, 60, 50]

      expect(mbh.values).to.deep.equal(expected);
    })
    it('should return null if heap is empty', ()=>{
      let mbh = new MaxBinaryHeap();

      let returned = mbh.extract();
      expect(returned).to.equal(null);
    })
  })
})