const chai = require('chai');
const expect = chai.expect;

const Graph = require('../graphs/graphs');

describe('graphs', ()=> {
  describe('#data structure', ()=> {
    it('should create a graph data structure', ()=> {
      let graph = new Graph();

      expect(graph).to.be.an('object');
      expect(graph).to.have.property('adjacencyList').to.deep.equal({});
    })
  })
  describe('#addVertex', ()=> {
    it('should add a vertex to the adjacency list', ()=> {
      let graph = new Graph();
      graph.addVertex('Tokyo');

      expect(graph.adjacencyList).to.have.property('Tokyo')
      expect(graph.adjacencyList.Tokyo).to.deep.equal([])
    })
  })
  describe('#addEdge', ()=> {
    it('should add a relationship between two edeges', ()=> {
      let g = new Graph();
      g.addVertex('Houston');
      g.addVertex('Austin');
      g.addVertex('Dallas');

      g.addEdge('Houston', 'Austin');

      expect(g.adjacencyList.Houston).to.deep.equal(['Austin'])
      expect(g.adjacencyList.Austin).to.deep.equal(['Houston'])
    })
    it('should handle errors', ()=> {
      let g = new Graph();
      g.addVertex('Houston');
      g.addVertex('Austin');
      g.addVertex('Dallas');

      let returned = g.addEdge('Houston', 'San Antonio');

      expect(returned).to.be.an('error');
      // expect(g.adjacencyList.Austin).to.deep.equal(['Houston'])
    })
  })
  describe('#removeEdge', ()=> {
    it('should remove a relationship between two edeges', ()=> {
      let g = new Graph();
      g.addVertex('Houston');
      g.addVertex('Austin');
      g.addVertex('Dallas');

      g.addEdge('Houston', 'Austin');
      g.addEdge('Austin', 'Dalls');
      g.addEdge('Dallas', 'Houston');

      g.removeEdge('Austin', 'Houston')

      let expected = {
        Houston: ['Dallas'],
        Austin: ['Dallas'],
        Dallas: ['Houston', 'Austin']
      }

      expect(g.adjacencyList).to.deep.equal(expected);
    })
    it('should handle errors', ()=> {
      let g = new Graph();
      g.addVertex('Houston');
      g.addVertex('Austin');
      g.addVertex('Dallas');

      let returned = g.addEdge('Houston', 'San Antonio');

      expect(returned).to.be.an('error');
      // expect(g.adjacencyList.Austin).to.deep.equal(['Houston'])
    })
  })
})