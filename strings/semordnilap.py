# Write a function semordnilap() that takes a list of unique strings and returns a list of semordnilap pairs.
# AlgoExpert version:

def semordnilap(words):
    # This line creates a set from the list of words. A set is an unordered collection of unique elements. By converting the list to a set, it removes any duplicate words in the input list, which simplifies the process of finding semordnilaps.
    # The use of a set makes the code more efficient when checking for semordnilaps since set membership checks are typically faster than list membership checks, especially for larger datasets. Additionally, it ensures that each word is considered only once, even if it appears multiple times in the input list.
    wordsSet = set(words)
    semordnilapPairs = []

    for word in words:
        reversedWord = word[::-1]
        if reversedWord in wordsSet and reversedWord != word:
            semordnilapPairs.append((word, reversedWord))
            wordsSet.remove(reversedWord)
            wordsSet.remove(word)

    return semordnilapPairs

print(semordnilap(['live', 'evil', 'live', 'evil', 'dog', 'god', 'cat', 'tac']))
# [('evil', 'live'), ('god', 'dog'), ('tac', 'cat')]
