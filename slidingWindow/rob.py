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
