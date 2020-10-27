class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2) {
    if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    } else {
      return new Error('vertex does not exist')
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
  }

  removeVertex(vertex) {
    for(let v in this.adjacencyList) {
      this.adjacencyList[v] = this.adjacencyList[v].filter(v => v !== vertex)
    }
    delete this.adjacencyList[vertex]
  }
}

module.exports = Graph;