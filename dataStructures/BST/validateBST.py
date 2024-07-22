# This problem works by taking in a minimum value and a maximum value for each node. We start out calling the function on the BST with minimum being -Infinity and the max being Infinity. So we are creating a kind of "global" min and max and comparing each trees value to those. In a BST with 10 as its value (tree.value), we know that tree.right.value cannot be less than that and we know that tree.left.value cannot be greater than that. So 10 becomes the maxValue for tree.left and 10 becomes the minValue for tree.right. So, we recursively call the function on tree.left with -Infinity still as the minimum, but this time 10 will be the max. And likewise, the function is recursively called on tree.right with the minimum being 10 and the max still being Infinity.

# This is an input class. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


# solution:


def validateBST(tree):
    return validateBSTHelper(tree, float("-inf"), float("inf"))


def validateBSTHelper(tree, minValue, maxValue):
    if tree is None:
        return True
    if tree.value >= maxValue or tree.value < minValue:
        return False
    leftIsValid = validateBSTHelper(tree.left, minValue, tree.value)
    return leftIsValid and validateBSTHelper(tree.right, tree.value, maxValue)
