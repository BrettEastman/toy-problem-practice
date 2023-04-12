# Leetcode 198
# You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

# Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

# my version of the solution by memory, changed slightly:
class Solution(object):
    def rob(self, nums):
        if len(nums) == 0:
            return None
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums)
        result = [0] * len(nums)
        result[0] = nums[0]
        result[1] = max(nums[0], nums[1])
        for i in range(2, len(nums)):
            result[i] = max(result[i - 2] + nums[i], result[i - 1])
        return max(result)

# solution from discussion
def rob(self, nums):
    length = len(nums)
    if len == 0:
        return 0
    if len == 1:
        return nums[0]
    if len == 2:
        return max(nums)
    dp = [0] * length
    dp[0], dp[1] = nums[0], max(nums[0], nums[1])
    for i in range(2, length):
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
    return max(dp)

print(rob(0, [ 2, 7, 9, 3, 1 ]))
