def selectionSort(array):
    for i in range(len(array)):
        lowest = i
        for j in range(i + 1, len(array)):
            if array[j] < array[lowest]:
                lowest = j
        if i != lowest:
            array[i], array[lowest] = array[lowest], array[i]
    return array

arr1 = [5,7,30,3,0,24,6,9,4]

print(selectionSort(arr1))
