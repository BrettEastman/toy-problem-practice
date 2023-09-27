# my original solution was using for loops, but I had problems with the index, so I switched to while loops with the help of ChatGPT. While loops are better for this problem because we are deleting elements from the array as we go, so the index is constantly changing.
def groupAnagrams(words):
    result = []
    i = 0

    while i < len(words):
        currentAnagramArr = [words[i]]
        sortedOriginal = ''.join(sorted(words[i]))

        j = i + 1

        while j < len(words):
            currentWord = words[j]
            sortedCurrent = ''.join(sorted(currentWord))

            if sortedCurrent == sortedOriginal:
                currentAnagramArr.append(currentWord)
                del words[j]
            else:
                j += 1

        result.append(currentAnagramArr)
        i += 1

    return result
