def findLongestSubstring(string):
    start = 0
    longest = 0
    seen = {}
    for i in range(len(string)):
        char = string[i]
        if char in seen:
            start = max(start, seen[char] + 1) # essential to have max here otherwise start could go back to the first index of the character, which would make longest too long
        longest = max(longest, (i - start + 1))
        seen[char] = i
    return longest

print(findLongestSubstring('rithmschool')) # 7
print(findLongestSubstring('thisisawesome')) # 6
print(findLongestSubstring('thecatinthehat')) # 7
print(findLongestSubstring('bbbbbb')) # 1
print(findLongestSubstring('longestsubstring')) # 8
print(findLongestSubstring('thisishowwedoit')) # 6