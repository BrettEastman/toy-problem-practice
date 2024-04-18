# Algoexpert version:
# You’re given an integer start and a list edges of pairs of integers.

# The list is what’s called an adjacency list, and it represents a graph. The number of vertices in the graph is equal to the length of edges, where each index i in edges contains vertex i’s outbound edges, in no particular order. Each individual edge is represented by a pair of two numbers, [destination, distance], where the destination is a positive integer denoting the destination vertex, and the distance is a positive integer representing the length of the edge (the distance from vertex i to vertex destination). Note that these edges are directed, meaning that you can only travel from a particular vertex to its destination, not the other way around (unless the destination vertex itself has an outbound edge to the original vertex).

# Write a function that computes the lengths of the shortest paths between start and all of the other vertices in the graph using Dijkstra’s algorithm and returns them in an array. Each index i in the output array should represent the length of the shortest path between start and vertex i. If no path is found from start to vertex i, then output[i] should be -1.

# Note that the graph represented by edges won’t contain any self loops (vertices that have an outbound edge to themselves) and will only have positively waited edges (i.e. no negative distances).

# example input:
# start = 0
# edges = [
#     [[1, 7]],
#     [[2, 6], [3, 20], [4, 3]],
#     [[3, 14]],
#     [[4, 2]],
#     [],
#     []
# ]

def dijkstrasAlgorithm(start, edges):
    numberOfVertices = len(edges)

    # setting up the inital min distances - creates an array of length numberOfVertices filled with infinity
    minDistances = [float('inf') for _ in range(numberOfVertices)]
    print('minDistances:', minDistances)  # [inf, inf, inf, inf, inf, inf]

    minDistances[start] = 0
    print('minDistances:', minDistances)  # [0, inf, inf, inf, inf, inf]

    # in Python, a set is a data structure, in curly brackets, that allows you to store unique values in no particular order. It looks like this: {'b', 'a', 'c', 'e', 'd'}
    visited = set()

    while len(visited) != numberOfVertices:
        # if we printed it in a list of two elements at the beginning of the while loop, as in [vertex, currentMinDistance], it would look like this: [0, 0], then [1, 7], then [4, 10], then [2, 13], then [3, 27], then [5, inf]
        vertex, currentMinDistance = getVertexWithMinDistance(
            minDistances, visited)

        if currentMinDistance == float('inf'):
            # if the currentMinDistance is infinity, then that means that there are no connections to the vertex, so we break out of the loop.
            break

        visited.add(vertex)

        for edge in edges[vertex]:
            # each edge printed in order of for loop: [1, 7], [2, 6], [3, 20], [4, 3], [3, 14], [4, 2]
            destination, distanceToDestination = edge

            # we don't really need this check, but it's good to have it in case the input is not well formed.
            if destination in visited:
                continue

            newPathDistance = currentMinDistance + distanceToDestination
            currentDestinationDistance = minDistances[destination]
            if newPathDistance < currentDestinationDistance:
                minDistances[destination] = newPathDistance

    # if the value of x is equal to infinity, we want to return -1, otherwise we want to return the value of x. We are applying that function to each element in the minDistances array.
    return list(map(lambda x: -1 if x == float('inf') else x, minDistances))


def getVertexWithMinDistance(distances, visited):
    currentMinDistance = float('inf')
    vertex = None

    # enumerate returns a tuple with the index and the value of the element in the array
    # if we printed it in a list at the beginning of the while loop above, it would look like this: [(0, 0), (1, inf), (2, inf), (3, inf), (4, inf), (5, inf)]
    # and at the end it would look like this: [(0, 0), (1, 7), (2, 13), (3, 27), (4, 10), (5, inf)]
    for vertexIdx, distance in enumerate(distances):
        if vertexIdx in visited:
            continue
        if distance <= currentMinDistance:
            vertex = vertexIdx
            currentMinDistance = distance

    return vertex, currentMinDistance


exampleStart = 0
exampleEdges = [
    [[1, 7]],
    [[2, 6], [3, 20], [4, 3]],
    [[3, 14]],
    [[4, 2]],
    [],
    []
]

print(dijkstrasAlgorithm(exampleStart, exampleEdges))  # [0, 7, 13, 27, 10, -1]
