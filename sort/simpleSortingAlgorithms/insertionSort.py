def insertionSort(arr):
    for i in range(1, len(arr)):
        currentVal = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > currentVal:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = currentVal
    return arr

print(insertionSort([2,1,9,76,4])) # [1,2,4,9,76]
print(insertionSort([5,7,30,3,0,24,6,9,4])) # [0,3,4,5,6,7,9,24,30]
