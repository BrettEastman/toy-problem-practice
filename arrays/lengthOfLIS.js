// longestIncreasingSubsequence:
var lengthOfLIS = function(nums) {
  let dp = (new Array(nums.length).fill(1));
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
  }
  return Math.max(...dp);
};

let nums = [10,9,2,5,3,7,101,18];

// The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

console.log(lengthOfLIS(nums));
