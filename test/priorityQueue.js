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

       //     100
      //   24     55
      // 12  7  24  31

      let expected  = [
        {val: 'Gun shot wound', priority: 100},
        {val: 'tummy-ache', priority: 24},
        {val: 'headache', priority: 55},
        {val: 'hangover', priority: 12},
        {val: 'case of the mondays', priority: 7},
        {val: 'migrane', priority: 20},
        {val: 'medium fever', priority: 31}
      ]

      expect(pq.values).to.deep.equal(expected);
    })
    it('should put items in the correct middle spot', ()=>{
      let mbh = new MaxBinaryHeap();

      mbh.insert(55);
      mbh.insert(24);
      mbh.insert(31);
      mbh.insert(12);
      mbh.insert(7);
      mbh.insert(24);
      mbh.insert(44);

       //     55
      //   24     31
      // 12  7  24  44

      let expected  = [55, 24, 44, 12, 7, 24, 31]

      expect(mbh.values).to.deep.equal(expected);
    })
    it('should put items in the correct end spot', ()=>{
      let mbh = new MaxBinaryHeap();

      mbh.insert(55);
      mbh.insert(24);
      mbh.insert(31);
      mbh.insert(12);
      mbh.insert(7);
      mbh.insert(24);
      mbh.insert(12);

       //     55
      //   24     31
      // 12  7  24  12

      let expected  = [55, 24, 31, 12, 7, 24, 12]

      expect(mbh.values).to.deep.equal(expected);
    })
  })
  describe('#extract', ()=> {
    it('should return the head of the heap', ()=>{
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
      let returned = mbh.extract();
      expect(returned).to.equal(100);
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