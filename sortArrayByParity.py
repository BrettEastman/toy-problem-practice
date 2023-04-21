# Leetcode 905
# Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

# Return any array that satisfies this condition.

# my solution which was correct, but slow
class Solution(object):
    def sortArrayByParity(self, nums):
        result = []
        for i in range(len(nums)):
            if nums[i] % 2 == 0:
                result.insert(0, nums[i])
            else:
                result.append(nums[i])
        return result

# official solution:
class Solution(object):
    def sortArrayByParity(self, A):
        A.sort(key = lambda x: x % 2)
        return A

# another solution:
class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        return [i for i in A if not i % 2] + [i for i in A if i % 2]