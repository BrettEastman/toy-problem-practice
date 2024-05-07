def minNumberOfCoinsForChange(n, denoms):
    # create resultArr to memoize number of coins for each amount, marking each as infinity except 0
    resultArr = [float('inf') for _ in range(n + 1)]
    resultArr[0] = 0

    # for loop through denoms
    for denom in denoms:
        # for loop through all possible amounts from 0 to n
        for i in range(len(resultArr)):
            # if current denom is less than or equal to amount (currentIndex)
            if denom <= i:
                # change memoized array at currentIndex to whichever is smaller - the current amount at that index, or the current amount at the index which is the current index minus the denom, plus 1
                resultArr[i] = min(resultArr[i], resultArr[i - denom] + 1)

    # if the last item in the resultArr is infinity, return -1, otherwise return the item
    if resultArr[n] == float('inf'):
        return -1
    else:
        return resultArr[n]
