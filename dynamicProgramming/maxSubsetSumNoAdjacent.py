# Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.

# If the input array is empty, the function should return zero

# Explanation
# If given the array [7,10,12,7,9,14] for example, we need to create a maxSums array [7,10,19,19,28,33]. The formula for this is:
# maxSums[i] = max(maxSums[i - 1], maxSums[i-2] + array[i])

# each index of the maxSum array holds the greatest sum we can get with the items up until and including the item at that index

def maxSubsetSumNoAdjacent(array):
    if not len(array):
        return 0
    if len(array) == 1:
        return array[0]

    maxSums = array[:]
    maxSums[0] = array[0]
    maxSums[1] = max(array[0], array[1])

    for i in range(2, len(array)):
        maxSums[i] = max(maxSums[i - 1], maxSums[i - 2] + array[i])

    return maxSums[-1]


arr = [7, 10, 12, 7, 9, 14]
print(maxSubsetSumNoAdjacent(arr))
