# Algoexpert version:
# You’re given an integer start and a list edges of pairs of integers.

# The list is what’s called an adjacency list, and it represents a graph. The number of vertices in the graph is equal to the length of edges, where each index i in edges contains vertex i’s outbound edges, in no particular order. Each individual edge is represented by a pair of two numbers, [destination, distance], where the destination is a positive integer denoting the destination vertex, and the distance is a positive integer representing the length of the edge (the distance from vertex i to vertex destination). Note that these edges are directed, meaning that you can only travel from a particular vertex to its destination, not the other way around (unless the destination vertex itself has an outbound edge to the original vertex).

# Write a function that computes the lengths of the shortest paths between start and all of the other vertices in the graph using Dijkstra’s algorithm and returns them in an array. Each index i in the output array should represent the length of the shortest path between start and vertex i. If no path is found from start to vertex i, then output[i] should be -1.

# Note that the graph represented by edges won’t contain any self loops (vertices that have an outbound edge to themselves) and will only have positively waited edges (i.e. no negative distances).

# example input:
# start = 0
# edges = [
#     [[1, 7]]],
#     [[2, 6], [3, 20], [4, 3]],
#     [[3, 14]],
#     [[4, 2]],
#     [],
#     []
# ]

def dijkstrasAlgorithm(start, edges):
    numberOfVertices = len(edges)

    # setting up the inital min distances
    minDistances = [float('inf') for _ in range(numberOfVertices)]
    minDistances[start] = 0

    minDistancesHeap = MinHeap([(idx, float('inf'))
                               for idx in range(numberOfVertices)])
    minDistancesHeap.update(start, 0)

    # in this version, we added the class method isEmpty to the MinHeap class, thus allowing us to get rid of the visited set and all references to it.
    while not minDistancesHeap.isEmpty():
        vertex, currentMinDistance = minDistancesHeap.remove()

        if currentMinDistance == float('inf'):
            break

        for edge in edges[vertex]:
            destination, distanceToDestination = edge

            newPathDistance = currentMinDistance + distanceToDestination
            currentDestinationDistance = minDistances[destination]
            if newPathDistance < currentDestinationDistance:
                minDistances[destination] = newPathDistance
                minDistancesHeap.update(destination, newPathDistance)

    # if the value of x is equal to infinity, we want to return -1, otherwise we want to return the value of x. We are applying that function to each element in the minDistances array.
    return list(map(lambda x: -1 if x == float('inf') else x, minDistances))


class MinHeap:
    def __init__(self, array):
        # Holds the position in the heap that each vertex is at
        self.vertexMap = {idx: idx for idx in range(len(array))}
        self.heap = self.buildHeap(array)

    def isEmpty(self):
        return len(self.heap) == 0

    def buildHeap(self, array):
        # In Python, the // is called floor division operator, and it means to divide and round down to the nearest whole number
        firstParentIdx = (len(array) - 2) // 2
        for currentIdx in reversed(range(firstParentIdx + 1)):
            self.siftDown(currentIdx, len(array) - 1, array)
        return array

    def siftDown(self, currentIdx, endIdx, heap):
        childOneIdx = currentIdx * 2 + 1
        while childOneIdx <= endIdx:
            childTwoIdx = currentIdx * 2 + 2 if currentIdx * 2 + 2 <= endIdx else -1
            if childTwoIdx != -1 and heap[childTwoIdx][1] < heap[childOneIdx][1]:
                idxToSwap = childTwoIdx
            else:
                idxToSwap = childOneIdx
            if heap[idxToSwap][1] < heap[currentIdx][1]:
                self.swap(currentIdx, idxToSwap, heap)
                currentIdx = idxToSwap
                childOneIdx = currentIdx * 2 + 1
            else:
                return

    def siftUp(self, currentIdx, heap):
        parentIdx = (currentIdx - 1) // 2
        while currentIdx > 0 and heap[currentIdx][1] < heap[parentIdx][1]:
            self.swap(currentIdx, parentIdx, heap)
            currentIdx = parentIdx
            parentIdx = (currentIdx - 1) // 2

    def remove(self):
        self.swap(0, len(self.heap) - 1, self.heap)
        vertex, distance = self.heap.pop()
        del self.vertexMap[vertex]
        self.siftDown(0, len(self.heap) - 1, self.heap)
        return vertex, distance

    def swap(self, i, j, heap):
        self.vertexMap[heap[i][0]] = j
        self.vertexMap[heap[j][0]] = i
        heap[i], heap[j] = heap[j], heap[i]

    def update(self, vertex, value):
        self.heap.append([vertex, value])
        self.siftUp(len(self.heap) - 1, self.heap)
