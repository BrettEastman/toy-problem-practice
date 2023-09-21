# Write a function that takes in a string of lowercase English alphabet letters, and returned the index of the strings first nonrepeating character.

# The first nonrepeating character is the first character in a string that occurs only wants

# If the input string doesn’t have any nonrepeating characters your function should return -1.

# My solution
def firstNonRepeatingCharacter(string):
    stringArr = [char for char in string]

    for i in range(len(stringArr)):
        currentChar = stringArr[i]
        rightSlice = stringArr[i + 1:len(stringArr)]
        leftSlice = stringArr[:i]

        if currentChar not in rightSlice and currentChar not in leftSlice:
            return i

    return -1


# Algoexpert solution 1
def firstNonRepeatingCharacter(string):
    for i in range(len(string)):
        foundDuplicate = False
        for j in range(len(string)):
            if string[i] == string[j] and i != j:
                foundDuplicate = True

        if not foundDuplicate:
            return i

    return -1


# GitHub copilot solution 1
def firstNonRepeatingCharacter(string):
    characterFrequencies = {}

    for character in string:
        characterFrequencies[character] = characterFrequencies.get(
            character, 0) + 1

    for idx in range(len(string)):
        character = string[idx]
        if characterFrequencies[character] == 1:
            return idx

    return -1


print(firstNonRepeatingCharacter("abcdcaf"))  # 1
