def validAnagram(first, second):
    if len(first) != len(second):
        return False
    lookup = {}

    for letter in first:
        if letter in lookup:
            lookup[letter] += 1
        else:
            lookup[letter] = 1

    for letter in second:
        if letter not in lookup:
            return False
        else:
            lookup[letter] -= 1
    return True

print(validAnagram('anagram', 'nagaram'))
