#Leetcode 557 - Reverse words in a string III
# Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

from typing import Self

class Solution(object):
    def reverseWords(self, s):
        result = []
        txt = s.split()
        for i in range(len(txt)):
            result.append(txt[i][::-1])
        return ' '.join(result)

print(Solution.reverseWords(Self, "Let's take LeetCode contest")) # s'teL ekat edoCteeL tsetnoc