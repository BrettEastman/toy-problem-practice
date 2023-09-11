// Leetcode 198
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/*
At each house, we can choose to either rob or skip
If we choose to rob, we can't rob the next house
If we choose to skip, we can rob the next house

dp[i] is the maximum amount of money we can rob without alerting the police at house i
dp[i] = max(dp[i-2] + nums[i], dp[i-1])
*/
var rob = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
  // T.C: O(N)
  // S.C: O(N)
};

// Later version
function rob(nums) {
  const n = nums.length;
  const f = new Array(n + 1).fill(0); // Stores maximum profit if we include the current house
  const g = new Array(n + 1).fill(0); // Stores maximum profit if we exclude the current house

  for (let i = 1; i <= n; i++) {
    f[i] = g[i - 1] + nums[i - 1]; // Maximum profit including the current house is the previous profit without the current house plus the current house's value
    g[i] = Math.max(g[i - 1], f[i - 1]); // Maximum profit excluding the current house is the maximum of the previous profit with and without the current house
  }

  return Math.max(f[n], g[n]); // Return the maximum profit from either including or excluding the last house
}

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
