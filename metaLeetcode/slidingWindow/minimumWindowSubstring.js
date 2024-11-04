// Leetcode: 76. Minimum Window Substring
// URL: https://leetcode.com/problems/minimum-window-substring/
// Hard

// Given two strings s and t of lengths m and n respectively, return the minimum window substring
// of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // create a map to store the count of each character in t
  let map = {};
  for (let char of t) {
    map[char] = map[char] + 1 || 1;
  }

  // create a counter to keep track of the number of characters in t that are in the window
  let counter = t.length;
  // create a left pointer and a right pointer
  let left = 0;
  let right = 0;
  // create a variable to store the length of the minimum window
  let minLen = Infinity;
  // create a variable to store the start index of the minimum window
  let start = 0;

  // iterate through the string
  while (right < s.length) {
    // if the character at the right pointer is in the map, decrement the counter
    if (map[s[right]] > 0) {
      counter--;
    }
    // decrement the count of the character in the map
    map[s[right]]--;
    // increment the right pointer
    right++;

    // if the counter is 0, it means all characters in t are in the window
    while (counter === 0) {
      // if the length of the window is smaller than the minimum length, update the minimum length and start index
      if (right - left < minLen) {
        minLen = right - left;
        start = left;
      }
      // if the character at the left pointer is in the map, increment the counter
      if (map[s[left]] === 0) {
        counter++;
      }
      // increment the count of the character in the map
      map[s[left]]++;
      // increment the left pointer
      left++;
    }
  }

  // if the minimum length is still Infinity, return an empty string
  if (minLen === Infinity) {
    return "";
  }

  // return the substring starting from the start index with the minimum length
  return s.substring(start, start + minLen);
};

let exampleS = "ADOBECODEBANC";
let exampleT = "ABC";
console.log(minWindow(exampleS, exampleT)); // Output: "BANC"

//
// my solo attempt, using Map instead of object(now corrected):
var minWindow = function (s, t) {
  // create a map of the number of each character of t
  let tMap = new Map();
  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  // create a counter set to length of t
  let counter = t.length;
  // create left and right pointers set to zero
  let left = 0;
  let right = 0;
  // create minLength set to infinity
  let minLength = Infinity;
  // create a start variable set to zero - this is similar to left, except that left and right will always go until the substring no longer meets the requirements, then start to look for a new substring. So, the start variable memorizes the correct starting place before the left changes
  let start = 0;

  // while right is less than s.length
  while (right < s.length) {
    // create currentRight char (s[right])
    let currentRight = s[right];
    // if the currentRight is in the map and greater than zero
    if (tMap.has(currentRight)) {
      if (tMap.get(currentRight) > 0) {
        counter--;
      }
      tMap.set(currentRight, tMap.get(currentRight) - 1);
    }
    right++;

    // while the counter is zero
    while (counter === 0) {
      // first check to see if the length of the window is smaller than the minimum length
      if (right - left < minLength) {
        minLength = right - left;
        // start = left (we're "saving" the good starting place, but we'll continue to iterate the left until its too far)
        start = left;
      }
      let currentLeft = s[left];
      // if currentLeft is in the map and its count is equal to 0
      if (tMap.has(currentLeft)) {
        tMap.set(currentLeft, tMap.get(currentLeft) + 1);
        if (tMap.get(currentLeft) > 0) {
          counter++;
        }
      }
      left++;
    }
  }

  // if minLength is still infinity
  if (minLength === Infinity) {
    return "";
  } else {
    return s.substring(start, start + minLength);
  }
};

// Best working version:
var minWindow = function (s, t) {
  // create a map of each character of t
  let map = {};
  for (let char of t) {
    map[char] = (map[char] || 0) + 1;
  }

  // counter set to t.length - total characters to match
  let counter = t.length;
  let left = 0,
    right = 0;
  let minLength = Infinity,
    start = 0;

  // iterate through the string
  while (right < s.length) {
    // see if the map has the character and if its greater than 0
    let charRight = s[right];
    if (map[charRight] > 0) {
      counter--;
    }
    map[charRight]--;
    // then increment the right
    right++;

    // an inner iteration while count is 0, which means we have a working substring
    while (counter === 0) {
      // check if we neeed to update the minLength and start variable
      if (right - left < minLength) {
        minLength = right - left;
        start = left;
      }
      // then we are adding back in the left character in the map and via the counter
      let charLeft = s[left];
      map[charLeft]++;
      if (map[charLeft] > 0) {
        counter++;
      }
      // then increment the left. this will chop off unnecessary characters
      left++;
    }
  }

  // Then return either a blank string if still Infinity, or the working substring
  return minLength === Infinity ? "" : s.substring(start, start + minLength);
};
