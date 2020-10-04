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
})