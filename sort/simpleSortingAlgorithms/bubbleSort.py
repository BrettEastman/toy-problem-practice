def bubbleSort(array):
    for i in reversed(range(len(array))):
        for j in range(i):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
    return array

arr1 = [5,7,30,3,0,24,6,9,4]

print(bubbleSort(arr1))
# [0, 3, 4, 5, 6, 7, 9, 24, 30]
