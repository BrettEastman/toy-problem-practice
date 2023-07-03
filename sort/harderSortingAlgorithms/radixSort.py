import math

def radixSort(nums):
    maxDigitCount = mostDigits(nums)
    for k in range(maxDigitCount):
        digitBuckets = [[] for i in range(10)]
        for i in range(len(nums)):
            digit = getDigit(nums[i], k)
            digitBuckets[digit].append(nums[i])
        nums = [num for bucket in digitBuckets for num in bucket]
    return nums

def getDigit(num, i):
    return math.floor(abs(num) / math.pow(10, i)) % 10

def digitCount(num):
    return len(str(num))

def mostDigits(arr):
    maxDigits = 0
    for num in arr:
        maxDigits = max(maxDigits, digitCount(num))
    return maxDigits

arr1 = [1, 2, 3333, 44, 235425, 23, 345, 9852]

print(radixSort(arr1))
