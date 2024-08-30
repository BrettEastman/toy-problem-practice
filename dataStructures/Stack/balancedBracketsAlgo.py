def balancedBrackets(string):
    # create stack
    stack = []
    # create open_close dictionary with closing brackets as keys, opening as values
    open_close = {')': '(', ']': '[', '}': '{'}
    # create openings as open_close.values()
    openings = open_close.values()
    closings = open_close.keys()

    # for loop through string
    for char in string:
        # if currentChar is an open bracket
        if char in openings:
            # add it to the stack
            stack.append(char)
        elif char not in closings:
            continue
        # else this means it is a closing bracket, so check to see if this closing brackets opening bracket is the most recent one on the stack
        elif len(stack) > 0 and stack[-1] == open_close[char]:
            # if so, then pop it off the stack
            stack.pop()
        # else return false (since we know that we are trying to add a closing bracket without its opening bracket)
        else:
            return False

    # if the stack has length
    if len(stack):
        # return false
        return False
    # else return true
    return True


string1 = "(a("

print(balancedBrackets(string1))
