def arrayOfProducts(array):
    result = []

    for i in range(len(array)):
        product = 1

        for j in range(len(array)):
            if j != i:
                product *= array[j]

        result.append(product)

    return result
