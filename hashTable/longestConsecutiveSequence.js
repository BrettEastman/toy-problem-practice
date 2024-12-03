// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// clean solution found on Leetcode:
function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;

  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue; // make sure starting from the beginning of sequence - we are going to be counting up from a starting number so we need to make sure nothing comes before it.

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }

  return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
