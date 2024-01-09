// TERMS:
// Vertex - same thing as a node. Vertex is the technical term.
// Edge - connection between nodes
// Weighted/Unweighted - values assigned to distances between vertices. Think of a google maps and the distances between points, each edge would be a number of miles, which is an example of weighted vertices
// Directed/Undirected - directions assigned to distances between vertices. Think of Instagram and how you can follow a celebrity but they don't follow you back, however you may follow a friend and they follow you back, so you follow each other. There are directions assigned between the connections and they can go both ways or just one way.

// Google maps would actually be an example of both a weighted and directed graph - roads can be one-way or two-way roads and each road (edge) has a distance in miles.

// The two most common ways to implement a graph are adjacency list or adjacency matrix. The adjacency list has a better big O for more vertices with less edges, so that is what we will implement in this example

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
}
