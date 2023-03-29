def longestPalindromicSubstring(string):
    currentLongest = [0, 1]
    # eventually we will slice out the palindrome from the string, i.e. string[0:1]
    for i in range(1, len(string)): # we start at 1 because we already know that the first character counts as palindrome
        odd = getLongestPalindromeFrom(string, i - 1, i + 1) # i - 1 is the left index, i + 1 is the right index
        even = getLongestPalindromeFrom(string, i - 1, i) # we use i because that is the starting index
        longest = max(odd, even, key = lambda x: x[1] - x[0]) # somehow this key thing checks to see which one is longer?
        currentLongest = max(longest, currentLongest, key = lambda x: x[1] - x[0])
    return string[currentLongest[0]:currentLongest[1]]

def getLongestPalindromeFrom(string, leftIdx, rightIdx):
    while leftIdx >= 0 and rightIdx < len(string):
        if string[leftIdx] != string[rightIdx]:
            break
        leftIdx -= 1
        rightIdx += 1
    return [leftIdx + 1, rightIdx]
