def longestConsecutiveSequence(nums):
    # edge case if no nums
    if len(nums) == 0:
        return 0
    # sort the nums list
    nums.sort()
    print('nums', nums)
    # max = 0
    maxLength = 0

    # for num in list
    for num in nums:
        # if num - 1 in list, continue (skip)
        if num - 1 in nums:
            continue

        # currNum = num
        currNum = num
        # currMax = 1
        currMax = 1

        # while currNum + 1 in list
        while currNum + 1 in nums:
            # currMax += 1
            currMax += 1
            # currNum += 1
            currNum += 1

        # max = max(max, currMax)
        maxLength = max(maxLength, currMax)

    # return max
    return maxLength


numbers = [100, 4, 200, 1, 3, 2]

print(longestConsecutiveSequence(numbers))
