def runLengthEncoding(string):
    # create arrEncoded var
    arrEncoded = []
    # create currentRunLength set to 1
    currentRunLength = 1
    # for loop from 1 to string length
    for i in range(1, len(string)):
        # create prevChar
        prevChar = string[i - 1]
        # create currChar
        currChar = string[i]
        # if prevChar is not equal to the currChar or currentRunLength ==9
        if prevChar != currChar or currentRunLength == 9:
            # append the stringifed Char length to arrEncoded
            arrEncoded.append(str(currentRunLength))
            # append the prevChar to arrEncoded
            arrEncoded.append(prevChar)
            # set currentRunLength to zero
            currentRunLength = 1
        # otherwise
        else:
            # increment currentRunLength
            currentRunLength += 1
    # For the last one, append the stringifed Char length
    arrEncoded.append(str(currentRunLength))
    # append the last char in string
    arrEncoded.append(string[len(string) - 1])
    # return the arr joined by ''
    return "".join(arrEncoded)
