# O(nLogn) time | O(1) space
def nonConstructibleChange(coins):
    coins.sort()
    currentChangeCreated = 0
    for coin in coins:
        if coin > currentChangeCreated + 1:
            return currentChangeCreated + 1
        currentChangeCreated += coin

    return currentChangeCreated + 1


coins = [5, 7, 1, 1, 2, 3, 22]

print(nonConstructibleChange(coins))
