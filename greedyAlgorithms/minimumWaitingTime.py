def minimumWaitingTime(queries):
    length = len(queries)
    result = 0
    queries.sort()
    for i in range(0, length - 1):
        current = queries[:i+1]
        result += sum(current)
    return result

numbers = [3, 2, 1, 2, 6]
print(minimumWaitingTime(numbers))
