import heapq
import math
from typing import List

# this is my long solution, an adaptation of the js solution, but in python you actually don't need to create a minHeap class. You can just use the heapq module, which is demonstrated below.


class Solution:
    # create minHeap class with the following: parentIndex, leftChildIndex, rightChildIndex, swap, insert, removeMin, heapifyUp, heapifyDown
    class MinHeap:
        def __init__(self):
            self.heap = []

        def build_heap(self, arr):
            for i in range(len(arr)):
                self.insert(arr[i])

        def parent_index(self, index):
            return math.floor((index - 1) / 2)

        def left_child_index(self, index):
            return 2 * index + 1

        def right_child_index(self, index):
            return 2 * index + 2

        def swap(self, i, j):
            self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

        def insert(self, val):
            self.heap.append(val)
            self.heapify_up(len(self.heap) - 1)

        def heapify_up(self, index):
            curr_index = index
            while curr_index > 0 and self.heap[curr_index] < self.heap[self.parent_index(curr_index)]:
                self.swap(self.parent_index(curr_index), curr_index)
                curr_index = self.parent_index(curr_index)

        def remove_min(self):
            if len(self.heap) == 0:
                return None
            if len(self.heap) == 1:
                return self.heap.pop(0)
            min_val = self.heap[0]
            self.heap[0] = self.heap.pop(-1)
            self.heapify_down(0)
            return min_val

        def heapify_down(self, index):
            curr_smallest_index = index
            left = self.left_child_index(index)
            right = self.right_child_index(index)

            if left < len(self.heap) and self.heap[left] < self.heap[curr_smallest_index]:
                curr_smallest_index = left

            if right < len(self.heap) and self.heap[right] < self.heap[curr_smallest_index]:
                curr_smallest_index = right

            if curr_smallest_index != index:
                self.swap(curr_smallest_index, index)
                self.heapify_down(curr_smallest_index)

    def findKthLargest(self, nums: List[int], k: int) -> int:
        complement_k = len(nums) - k
        min_heap = self.MinHeap()
        # Build the min heap with all elements
        min_heap.build_heap(nums)
        # Remove elements until the heap size is complement_k
        for _ in range(complement_k):
            min_heap.remove_min()
        # The next minimum is the kth largest
        result = min_heap.remove_min()
        return result


# this is the short solution using the heapq module
# the heapq module is a min heap, so we can just push the first k elements into the heap, and then for the remaining elements, we can push the element

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # Initialize a min heap with the first k elements
        min_heap = nums[:k]
        heapq.heapify(min_heap)

        # Iterate through the remaining elements
        for num in nums[k:]:
            if num > min_heap[0]:  # If current element is larger than the smallest in heap
                # Push new element and pop the smallest
                heapq.heappushpop(min_heap, num)

        # The root of the heap is the kth largest element
        return min_heap[0]
