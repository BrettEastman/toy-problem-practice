def threeNumberSort(array, order):
    orderCount = [0, 0, 0]

    # for loop over main array to count all instances of currentOrderCharacter
    for item in array:
        orderIndex = order.index(item)
        orderCount[orderIndex] += 1

    # another for loop over the array, this time to replace each item with currentOrderCharacter
    for i in range(len(array)):
        if orderCount[0] > 0:
            # replace the item with currentOrderCharacter
            array[i] = order[0]
            # decrement orderCount[0]
            orderCount[0] -= 1
        elif orderCount[1] > 0:
            array[i] = order[1]
            orderCount[1] -= 1
        elif orderCount[2] > 0:
            array[i] = order[2]
            orderCount[2] -= 1

    return array
