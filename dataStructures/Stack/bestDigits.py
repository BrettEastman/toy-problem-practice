# Algoexpert solution:
def bestDigits(number, numDigits):
    stack = []

    for digit in number:
        while numDigits > 0 and len(stack) > 0 and digit > stack[len(stack) - 1]:
            numDigits -= 1
            stack.pop()

        stack.append(digit)

    while numDigits > 0:
        numDigits -= 1
        stack.pop()

    return "".join(stack)


# my first solution - only passed 16/18 tests
def bestDigits(number, numDigits):
    length = len(number)
    i = 1
    result_list = [number[0]]

    while i < length:
        j = i

        while j < length and len(result_list) > 0 and int(number[j]) >= int(result_list[-1]) and numDigits > 0:
            result_list.pop()
            numDigits -= 1
            j += 1

        result_list.append(number[i])
        i += 1

    while numDigits > 0:
        result_list.pop()
        numDigits -= 1

    result = "".join(result_list)
    print(result)
    return result


num = "10000000002"
digit = 9

print(bestDigits(num, digit))
