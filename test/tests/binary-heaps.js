const chai = require('chai'),
  expect = chai.expect, 
  should = chai.should();

const MaxBinaryHeap = require('../binary-heaps/binaryHeap');

describe('# MaxBinaryHeap', ()=> {
  describe('#Class Constructor', ()=> {
    it('should create a max binary heap', ()=> {
      let mbh = new MaxBinaryHeap();

      expect(mbh).to.be.an('object');
      expect(mbh).to.have.property('values');
    })
  })
  describe('#insert', ()=> {
    it('should work on empty heaps', ()=>{
      let mbh = new MaxBinaryHeap();

      mbh.insert(55);
      let expected = [55]

      expect(mbh.values).to.deep.equal(expected);
    })
    it('should put items in the correct spot', ()=>{
      let mbh = new MaxBinaryHeap();

      mbh.insert(55);
      mbh.insert(24);
      mbh.insert(31);
      mbh.insert(12);
      mbh.insert(7);
      mbh.insert(24);
      mbh.insert(100);

       //     55
      //   24     31
      // 12  7  24  100

      let expected  = [100, 24, 55, 12, 7, 24, 31]

      expect(mbh.values).to.deep.equal(expected);
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