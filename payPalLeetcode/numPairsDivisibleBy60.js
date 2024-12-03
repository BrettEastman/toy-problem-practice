// Leetcode: # 1010 Pairs of Songs With Total Durations Divisible by 60
// URL: https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
// Difficulty: Medium
// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:
// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60

// Example 2:
// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let count = 0; // Initialize a counter to keep track of valid pairs.

  // Initialize an array to store the frequency of each possible remainder when divided by 60.
  // There are 60 possible remainders: 0 to 59.
  let remainders = new Array(60).fill(0);

  // Iterate through each song duration in the 'time' array.
  for (let t of time) {
    // Calculate the remainder of the current song duration when divided by 60.
    let remainder = t % 60;

    // Calculate the complement remainder needed to reach a sum that's divisible by 60.
    // For example, if remainder is 20, complement is 40 because (20 + 40) % 60 == 0.
    // Note: If remainder is 0, complement should also be 0 to form a valid pair. This is why we need to do one more % 60, to ensure that the complement is 0 and not 60.
    let complement = (60 - remainder) % 60;

    // Add the number of songs seen so far that have a remainder equal to 'complement'.
    // Each of these songs can form a valid pair with the current song.
    count += remainders[complement];

    // Increment the count of the current remainder in the 'remainders' array.
    // This indicates that we've seen another song with this remainder.
    remainders[remainder]++;
  }

  // After processing all songs, 'count' holds the total number of valid pairs.
  return count;
};

let example1 = [30, 20, 150, 100, 40];
let example2 = [60, 60, 60];
console.log(numPairsDivisibleBy60(example1)); // 3
// console.log(numPairsDivisibleBy60(example2)); // 3
