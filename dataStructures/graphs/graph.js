// TERMS:
// Vertex - same thing as a node. Vertex is the technical term.
// Edge - connection between nodes
// Weighted/Unweighted - values assigned to distances between vertices. Think of a google maps and the distances between points, each edge would be a number of miles, which is an example of weighted vertices
// Directed/Undirected - directions assigned to distances between vertices. Think of Instagram and how you can follow a celebrity but they don't follow you back, however you may follow a friend and they follow you back, so you follow each other. There are directions assigned between the connections and they can go both ways or just one way.

// Google maps would actually be an example of both a weighted and directed graph - roads can be one-way or two-way roads and each road (edge) has a distance in miles.

// The two most common ways to implement a graph are adjacency list or adjacency matrix. The adjacency list has a better big O for more vertices with less edges, so that is what we will implement in this example. And, this will be an unweighted and undirected implementation.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }

  addEdge(v1, v2) {
    // in the real world, we might also add error handling for invalid vertices
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push(v2);
    }
    if (!this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push(v1);
    }
  }

  // my original way using includes, indexOf and splice
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1].includes(v2)) {
      let index = this.adjacencyList[v1].indexOf(v2);
      this.adjacencyList[v1].splice(index, 1);
    }
    if (this.adjacencyList[v2].includes(v1)) {
      let index = this.adjacencyList[v2].indexOf(v1);
      this.adjacencyList[v2].splice(index, 1);
    }
  }
  // Colt Steele version using filter
  removeEdge2(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // My version
  removeVertex(vertex) {
    let connectedVertices = this.adjacencyList[vertex];
    delete this.adjacencyList[vertex];
    for (let cVertex of connectedVertices) {
      this.adjacencyList[cVertex] = this.adjacencyList[cVertex].filter(
        (v) => v !== vertex
      );
    }
  }

  // Colt Steele version (this doesn't work for some reason when I test it out)
  removeVertex2(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList;
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("SF");
g.addVertex("LA");
g.addVertex("Paris");
g.addEdge("Dallas", "Tokyo");
g.addEdge("SF", "Tokyo");
g.addEdge("SF", "Dallas");
g.addEdge("SF", "Paris");
g.addEdge("Paris", "Dallas");
g.addEdge("Paris", "LA");
g.addEdge("SF", "LA");

console.log("g before remove", g);

g.removeEdge("Dallas", "Tokyo");
g.removeEdge("Dallas", "SF");
g.removeEdge("LA", "SF");

console.log("g after removeEdge", g);

g.removeVertex("Dallas");
g.removeVertex("LA");

console.log("g after removeVertex", g);
