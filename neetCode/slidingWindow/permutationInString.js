// Leetcode 567. Permutation in String
// Level: Medium

// Given two strings s1 and s2, return true if s2 contains the permutation of s1.
//  In other words, one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo
// Output: false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // edge case if s1 is greater
  if (s1.length > s2.length) return false;

  // create two hash maps (s1Arr, s2Arr) or arrays with 26 indices each set to 0
  const s1Arr = new Array(26).fill(0);
  const s2Arr = new Array(26).fill(0);
  // we are looking to see if our arrays have 26 matches, at which point we will stop the algorithm and return true

  // for loop through s1 to increment s1Arr and s2Arr indices which match the ascii value of the character (minus ascii for "a")
  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Arr[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // create matches var set to 0
  let matches = 0;
  // for loop 26 times, incrementing matches each time indices in s1Arr and s2Arr are equal
  for (let j = 0; j < 26; j++) {
    if (s1Arr[j] === s2Arr[j]) {
      matches++;
    }
  }

  // sliding window for loop with left starting at 0 and right looping from length of s1 to length of s2
  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;

    // get currentIndex with ascii calculation - s2[right] - ascii "a" number
    const rightIndex = s2.charCodeAt(right) - "a".charCodeAt(0);
    // increment s2Arr at that index
    s2Arr[rightIndex]++;
    if (s1Arr[rightIndex] === s2Arr[rightIndex]) {
      matches++;
      // else if s1Arr[r] + 1 === s2Arr[r], that means it is no longer a match, so decrement matches
    } else if (s1Arr[rightIndex] + 1 === s2Arr[rightIndex]) {
      matches--;
    }

    const leftIndex = s2.charCodeAt(left) - "a".charCodeAt(0);
    s2Arr[leftIndex]--;
    if (s1Arr[leftIndex] === s2Arr[leftIndex]) {
      matches++;
    } else if (s1Arr[leftIndex] - 1 === s2Arr[leftIndex]) {
      matches--;
    }
    left++;
  }

  return matches === 26;
};

let s1 = "ab";
let s2 = "eidboaoo";
console.log(checkInclusion(s1, s2)); // true
