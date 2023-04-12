# Leetcode #200
# I attempted to solve this problem in a similar way to the JS version, but this solution was not correct:
class Solution(object):
    def numIslands(self, grid):
        islands = 0
        mRows = len(grid)
        nColumns = len(grid[0])
        direction = [[0, -1], [1, 0], [0, 1], [-1, 0]]

        def dfs(self, grid, i, j):
            grid[i][j] = 2
            for dir in range(len(direction)):
                r = i + direction[0]
                c = j + direction[1]
                if grid[r][c] == 1 and r < mRows and r >= 0 and c < nColumns and c >=0:
                    self.dfs(grid, r, c)
            return

        for i in range(mRows):
            for j in range(nColumns):
                if grid[i][j] == 1:
                    self.dfs(grid, i, j)
                    islands += 1

        return islands

# I asked ChatGPT for help and here is what it gave me:
class Solution(object):
    def numIslands(self, grid):
        islands = 0
        mRows = len(grid)
        nColumns = len(grid[0])
        direction = [[0, -1], [1, 0], [0, 1], [-1, 0]]

        def dfs(grid, i, j):
            grid[i][j] = '0'
            for dir in range(len(direction)):
                r = i + direction[dir][0]
                c = j + direction[dir][1]
                if r < 0 or c < 0 or r >= mRows or c >= nColumns or grid[r][c] == '0':
                    continue
                self.dfs(grid, r, c)
            return

        for i in range(mRows):
            for j in range(nColumns):
                if grid[i][j] == '1':
                    self.dfs(grid, i, j)
                    islands += 1

        return islands

# And it had a lot of notes for me on what it fixed:

# Here are the changes that were made:

# grid[i][j] = 2 in the dfs function was changed to grid[i][j] = '0', since we want to mark the visited cells as water (or '0') instead of some other value.
# r = i + direction[0] and c = j + direction[1] were changed to r = i + direction[dir][0] and c = j + direction[dir][1], respectively. This will correctly calculate the row and column of the neighboring cell in each iteration of the for loop.
# The condition if grid[r][c] == 1 was changed to if grid[r][c] == '1', since the values in the grid are strings, not integers.
# The condition for checking if the indices are valid was changed to if r < 0 or c < 0 or r >= mRows or c >= nColumns or grid[r][c] == '0':. This will correctly handle cases where the neighboring cell is outside the grid or has already been visited.
# The dfs function no longer takes self as an argument, since it's not an instance method of the class.
# Finally, return was removed from the end of the dfs function, since it's not necessary.

# There were still actually a couple things wrong with the ChatGPT version. It forgot to remove the "self" in front of the function calls.
# Here is the final, working solution, submitted to Leetcode:
class Solution(object):
    def numIslands(self, grid):
        islands = 0
        mRows = len(grid)
        nColumns = len(grid[0])
        direction = [[0, -1], [1, 0], [0, 1], [-1, 0]]

        def dfs(grid, i, j):
            grid[i][j] = '0'
            for dir in range(len(direction)):
                r = i + direction[dir][0]
                c = j + direction[dir][1]
                if r < 0 or c < 0 or r >= mRows or c >= nColumns or grid[r][c] == '0':
                    continue
                dfs(grid, r, c)
            return

        for i in range(mRows):
            for j in range(nColumns):
                if grid[i][j] == '1':
                    dfs(grid, i, j)
                    islands += 1

        return islands