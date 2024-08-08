# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# create new class to store the root index as a global variable


class TreeInfo:
    def __init__(self, rootIndex):
        self.rootIndex = rootIndex


def reconstructBst(preOrderTraversalValues):
    currentTreeInfo = TreeInfo(0)
    return reconstructBstFromRange(float('-inf'), float('inf'), preOrderTraversalValues, currentTreeInfo)


def reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentTree):
    if currentTree.rootIndex == len(preOrderTraversalValues):
        return None

    currentRootValue = preOrderTraversalValues[currentTree.rootIndex]

    if currentRootValue < lowerBound or currentRootValue >= upperBound:
        return None

    currentTree.rootIndex += 1
    leftSubTree = reconstructBstFromRange(
        lowerBound, currentRootValue, preOrderTraversalValues, currentTree)
    rightSubTree = reconstructBstFromRange(
        currentRootValue, upperBound, preOrderTraversalValues, currentTree)

    return BST(currentRootValue, leftSubTree, rightSubTree)
