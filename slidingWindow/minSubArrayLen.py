def minSubArrayLen(nums, target):
    minLen = float("inf")
    start = 0
    currSum = 0
    for i in range(len(nums)):
        currSum += nums[i]
        while currSum >= target:
            if (i - start + 1) < minLen:
                minLen = (i - start + 1)
            currSum -= nums[start]
            start += 1
    return minLen

print(minSubArrayLen([2,3,1,2,4,3], 7)) # 2 -> because [4,3] is the smallest subarray
