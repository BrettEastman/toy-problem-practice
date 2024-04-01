// need to know Graphs and Priority Queues
// it finds the shortest path between two vertices on a graph

// basic (naive) version of PQ - better version in binaryHeap
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    const result = this.values.shift();
    return result;
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// we are going to implement Dijkstra's as a method on WeightedGraph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  // Dijkstra's is just a method in a graph of finding out the shortest path between two points.
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let currentSmallestValue;
    let path = [];

    // build up initial state
    for (let vertex in this.adjacencyList) {
      // example adjacencyList: {
      //   A: [ { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ],
      //   B: [ { node: 'A', weight: 4 }, { node: 'E', weight: 3 } ]
      // }
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      currentSmallestValue = nodes.dequeue().value;
      if (currentSmallestValue === finish) {
        // Need to build up the path and return that
        while (previous[currentSmallestValue]) {
          path.push(currentSmallestValue);
          currentSmallestValue = previous[currentSmallestValue];
        }
        break;
      }
      if (
        currentSmallestValue ||
        distances[currentSmallestValue] !== Infinity
      ) {
        for (let neighbor in this.adjacencyList[currentSmallestValue]) {
          // find neighboring node
          let nextNode = this.adjacencyList[currentSmallestValue][neighbor];
          // calculate new distance to the neighboring node
          let candidateSum = distances[currentSmallestValue] + nextNode.weight;
          // then compare that to what we currently stored for 'E'
          if (candidateSum < distances[nextNode.node]) {
            // if that is the case, then we will update the smallest distance to neighbor
            distances[nextNode.node] = candidateSum;
            // then we need to update our previous object - how we got to neighbor
            previous[nextNode.node] = currentSmallestValue;
            // then enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidateSum);
          }
        }
      }
    }
    const finalPath = path.concat(currentSmallestValue).reverse();
    console.log("finalPath", finalPath);
    return finalPath;
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");

// console.log("graph", graph.adjacencyList);
