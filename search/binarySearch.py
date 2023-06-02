import math

def binarySearch(arr, target):
    start = 0
    end = len(arr)
    while start < end:
        mid = math.floor((start + end) / 2)
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            end = mid
        elif arr[mid] < target:
            start = mid + 1
    return -1

print(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) # 16
print(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) # -1