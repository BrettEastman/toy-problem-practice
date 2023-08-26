def maxSubarraySum(array, n):
    if n > len(array):
        return None
    maxSum = 0
    for i in range(n):
        maxSum += array[i]
    tempSum = maxSum
    for i in range(n, len(array)):
        tempSum = tempSum - array[i-n] + array[i]
        maxSum = max(maxSum, tempSum)
    return maxSum

print(maxSubarraySum([1,2,5,2,8,1,5], 2)); #10
print(maxSubarraySum([1,2,5,2,8,1,5], 4)); #17
