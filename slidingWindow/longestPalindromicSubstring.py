# my easier to understand version
def longestPalindromicSubstring(string):
    if not string:
        return None

    length = len(string)
    palindrome = string[0]

    def palindromeCheck(str):
        start = 0
        end = len(str) - 1
        while start <= end:
            if str[start] == str[end]:
                start += 1
                end -= 1
            else:
                return False
        return True

    for i in range(0, length):
        for j in range(i + 1, length):
            current = string[i:j + 1]
            if palindromeCheck(current) == True and len(current) > len(palindrome):
                palindrome = current

    return palindrome


# version from algoexpert
def longestPalindromicSubstring(string):
    currentLongest = [0, 1]
    # eventually we will slice out the palindrome from the string, i.e. string[0:1]
    # we start at 1 because we already know that the first character counts as palindrome
    for i in range(1, len(string)):
        # i - 1 is the left index, i + 1 is the right index
        odd = getLongestPalindromeFrom(string, i - 1, i + 1)
        # we use i because that is the starting index
        even = getLongestPalindromeFrom(string, i - 1, i)
        # somehow this key thing checks to see which one is longer?
        longest = max(odd, even, key=lambda x: x[1] - x[0])
        currentLongest = max(longest, currentLongest,
                             key=lambda x: x[1] - x[0])
    return string[currentLongest[0]:currentLongest[1]]


def getLongestPalindromeFrom(string, leftIdx, rightIdx):
    while leftIdx >= 0 and rightIdx < len(string):
        if string[leftIdx] != string[rightIdx]:
            break
        leftIdx -= 1
        rightIdx += 1
    return [leftIdx + 1, rightIdx]
