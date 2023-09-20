def generateDocument(characters, document):
    # create charDict
    charDict = {}
    # for loop over char to determine if in charDict, if not add it, otherwise, increment
    for i in range(len(characters)):
        currChar = characters[i]
        if currChar not in charDict:
            charDict[currChar] = 1
        else:
            charDict[currChar] += 1

    # for loop over document
    for j in range(len(document)):
        currDocChar = document[j]
        # if document[char] is not there, or equal to zero, then return False
        if currDocChar not in charDict or charDict[currDocChar] == 0:
            return False
        charDict[currDocChar] -= 1

    return True
