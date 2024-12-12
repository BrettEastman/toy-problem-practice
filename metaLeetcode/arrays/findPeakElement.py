# Leetcode: 162. Find Peak Element
# URL: https://leetcode.com/problems/find-peak-element/
# Difficulty: Medium

# A peak element is an element that is strictly greater than its neighbors.
# Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
# You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
# You must write an algorithm that runs in O(log n) time.

# *The key thing to remember here is that we are looking for ANY possible peak and every array example will have at least one peak, probably multiple. In the example using nums2 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7], the peak could be 3 or 7. Using the binary search algorithm will never be able to find index 3, but it doesn't matter. The whole purpose is to find ANY peak in O(log n) time.

def findPeakElement(nums):
    left = 0
    right = len(nums) - 1

    while left < right:
        mid = left + (right - left) // 2

        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1

    return left


nums = [1, 2, 1, 3, 5, 6, 4]
nums2 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
print(findPeakElement(nums2))
