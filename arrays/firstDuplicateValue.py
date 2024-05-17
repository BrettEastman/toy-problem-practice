def firstDuplicateValue(array):
    duplicateWithMinIndex = -1
    minIndex = float('inf')

    for i in range(len(array)):
        current = array[i]
        for j in range(i + 1, len(array)):
            duplicate = array[j]
            if current == duplicate and j < minIndex:
                duplicateWithMinIndex = current
                minIndex = j

    return duplicateWithMinIndex
