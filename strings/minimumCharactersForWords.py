def minimumCharactersForWords(words):
    result = []
    # create maxCharFrequencies object
    maxCharFrequencies = {}

    for currentWord in words:
        currentCharFreq = findCharFrequencies(currentWord)
        updateMaxCharFrequencies(maxCharFrequencies, currentCharFreq)

    for maxChar in maxCharFrequencies:
        frequency = maxCharFrequencies[maxChar]

        while frequency > 0:
            result.append(maxChar)
            frequency -= 1

    # return an array of character frequencies
    return result

# need to determine character frequencies of each word


def findCharFrequencies(word):
    charFrequencies = {}

    for char in word:
        if char not in charFrequencies:
            charFrequencies[char] = 1
        else:
            charFrequencies[char] += 1

    return charFrequencies

# need to update maxCharFrequencies object


def updateMaxCharFrequencies(maxCharFrequencies, charFrequencies):
    for currentChar in charFrequencies:
        freq = charFrequencies[currentChar]
        if currentChar in maxCharFrequencies:
            maxCharFrequencies[currentChar] = max(
                freq, maxCharFrequencies[currentChar])
        else:
            maxCharFrequencies[currentChar] = freq

    return maxCharFrequencies


exMaxList = {'g': 2, 'o': 2, 'l': 1, 'y': 2, 'e': 2, 's': 1}
exWord = {'t': 1, 'h': 1, 'i': 1, 's': 1}
# print(updateMaxCharFrequencies(exMaxList, exWord))

wordList = ["this", "that", "did", "deed", "them!", "a"]
# print(findCharFrequencies(wordList[0]))

print(minimumCharactersForWords(wordList))
