# my solution:
def countUniqueValues(array):
    left = 0
    right = 1
    while right < len(array):
        if array[right] == array[left]:
            right += 1
        else:
            left += 1
            array[left] = array[right]
            right += 1
    return left+1

# Colt Steele
def countUniqueValues(arr):
    if len(arr) == 0:
        return 0
    i = 0
    for j in range(1, len(arr)):
        if arr[j] != arr[i]:
            i += 1
            arr[i] = arr[j]
    return i + 1


print(countUniqueValues([1,1,1,1,1,2])) # 2
print(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) #7
print(countUniqueValues([])) # 0
print(countUniqueValues([-2,-1,-1,0,1])) # 4