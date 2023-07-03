import math

def quickSort(list):
    length = len(list)
    if length <= 1:
        return list
    midInd = math.floor(length / 2)
    pivot = list[midInd]
    left = []
    right = []
    for i in range(length):
        if i == midInd:
            continue
        if list[i] < pivot:
            left.append(list[i])
        else:
            right.append(list[i])

    return quickSort(left) + [pivot] + quickSort(right)

print(quickSort([2,5,3,7,9,556,34,6,0,11]))
