class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(val) {
    this.adjacencyList[val] = []
  }
}

module.exports = Graph;