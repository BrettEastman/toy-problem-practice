def minHeightBst(array):
    return minHeightBstHelper(array, 0, len(array) - 1)


def minHeightBstHelper(arr, startIndex, endIndex):
    if endIndex < startIndex:
        return None
    # the "//" symbol is the integer division operation - same thing as Math.floor in js
    midIndex = (startIndex + endIndex) // 2
    mainBst = BST(arr[midIndex])
    mainBst.left = minHeightBstHelper(arr, startIndex, midIndex - 1)
    mainBst.right = minHeightBstHelper(arr, midIndex + 1, endIndex)
    return mainBst


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)
