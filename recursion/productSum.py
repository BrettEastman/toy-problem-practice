def productSum(array, timesAmount = 1):
    sum = 0
    for element in array:
        if type(element) is list:
            sum += productSum(element, timesAmount + 1)
        else:
            sum += element
    return sum * timesAmount