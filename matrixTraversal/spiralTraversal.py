def spiralTraverse(array):
    result = []
    left_index = 0
    right_index = len(array[0]) - 1
    top_index = 0
    bottom_index = len(array) - 1

    while left_index <= right_index and top_index <= bottom_index:
        for i in range(left_index, right_index + 1):
            result.append(array[top_index][i])
        top_index += 1

        for j in range(top_index, bottom_index + 1):
            result.append(array[j][right_index])
        right_index -= 1

        if top_index <= bottom_index:
            # this is how to do a reverse loop in python - the third argument is the step. In this case -1 means go backwards by 1 index
            for k in range(right_index, left_index - 1, -1):
                result.append(array[bottom_index][k])
            bottom_index -= 1

        if left_index <= right_index:
            for l in range(bottom_index, top_index - 1, -1):
                result.append(array[l][left_index])
            left_index += 1

    return result
