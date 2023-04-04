# Write a function that takes in an array of unique integers and returns an array of all permutations of those integeres in no particular order. If the input array is empty, the function should return an empty array.

# solution #1 - the classic solution
# Upper Bound: O(n^2*n!) | O(n*n!) space
# Roughly: O(n*n!) | O(n*n!) space
def getPermutations(array):
    permutations = []
    permutationsHelper(array, [], permutations)
    return permutations

def permutationsHelper(array, currentPermutation, permutations):
    if not len(array) and len(currentPermutation):
        permutations.append(currentPermutation)
    else: #if the array does still have integers, we are going to iterate through them
        for i in range(len(array)): # we are going to generate a new array of remaining numbers
            newArray = array[:i] + array[i + 1:]
            newPermutation = currentPermutation + [array[i]]
            permutationsHelper(newArray, newPermutation, permutations)

# 2nd solution, with swapping, a bit more confusing, but a bit better for space time complexity:
def getPermutations(array):
    permutations = []
    permutationsHelper(0, array, permutations)
    return permutations

def permutationsHelper(i, array, permutations):
    if i == len(array) - 1:
        permutations.append(array[:])
    else:
        for j in range(i, len(array)):
            # j == i + 1, then j == i + 2, etc
            # [1, 2, ...]
            swap(array, i, j)
            # [2, 1, ...]
            permutationsHelper(i + 1, array, permutations)
            swap(array, i, j)
            # [1,2, ...]

def swap(array, i, j):
    array[i], array[j] = array[j], array[i]