from collections import deque


def shortestPathBinaryMatrix(grid):
    n = len(grid)
    # edge case to make sure that it is not the first item in the matrix
    if grid[0][0] == 1 or grid[n - 1][n - 1] == 1:
        return -1
    # create list of possible directions
    directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
    ]
    # create a set of some kind to hold unique values (each row and col)
    visited = set()
    visited.add((0, 0))
    # create a queue with the first item already there - a list [0,0,1] representing row, col, distance
    queue = deque()
    queue.append([0, 0, 1])

    # while loop through the queue - this is our breadth-first search tool. We will popleft out a row/col/distance from the queue, then first check to see if it is the last place in the matrix. If so, we return the distance, which will be the correct answer. Then we will do a for loop through all directions to check all surrounding squares, to make sure they are still in bounds, that they haven't been visted and are 0. If that is the case then we add the newRow/newCol to our visited set then push it to the queue.
    while len(queue) > 0:
        row, col, distance = queue.popleft()

        if row == n - 1 and col == n - 1:
            return distance

        for direction in directions:
            new_row = row + direction[0]
            new_col = col + direction[1]

            if 0 <= new_row < n and 0 <= new_col < n and (new_row, new_col) not in visited and grid[new_row][new_col] == 0:
                visited.add((new_row, new_col))
                queue.append([new_row, new_col, distance + 1])

    # return -1 if no path found
    return -1


exampleGrid = [[0, 1], [1, 0]]
print(shortestPathBinaryMatrix(exampleGrid))  # 2
