// Leetcode: 680. Valid Palindrome II
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

/**
 * @param {string} s
 * @return {boolean}
 */
// my first attempt, which is not very efficient and did not pass all of the tests (failed for a really long string)
var validPalindrome = function (s) {
  // if s is palindrome
  if (isPalindrome(s)) {
    return true;
  } else {
    // create sArr
    let sArr = s.split("");
    // for loop through sArr
    for (let i = 0; i < sArr.length; i++) {
      // splice out current char
      let tempArr = sArr.toSpliced(i, 1);
      // join the array and check to see isPalindrome
      if (isPalindrome(tempArr.join("")) === true) {
        return true;
      }
    }
  }
  // otherwise return false
  return false;
};

function isPalindrome(string) {
  // have a pointer at the end of the string
  // and one at the beginning
  let startPointer = 0;
  let endPointer = string.length - 1;

  // while startPointer <= endPointer
  while (startPointer <= endPointer) {
    // if character is not the same
    if (string[startPointer] !== string[endPointer]) {
      // return false
      return false;
    } else {
      startPointer++;
      endPointer--;
    }
  }
  return true;
}

// solution from leetcode
/*
Solution:

1. Use two pointers, one initialised to 0 and the other initialised to end of string. Check if characters at each index
are the same. If they are the same, shrink both pointers. Else, we have two possibilities: one that neglects character
at left pointer and the other that neglects character at right pointer. Hence, we check if s[low+1...right] is a palindrome
or s[low...right-1] is a palindrome. If one of them is a palindrome, we know that we can form a palindrome with one deletion and return true. Else, we require more than one deletion, and hence we return false.
*/
var validPalindrome = function (s) {
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    if (s[low] !== s[high]) {
      return isPalindrome(s, low + 1, high) || isPalindrome(s, low, high - 1);
    }
    low++, high--;
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};

function isPalindrome(str, low, high) {
  while (low < high) {
    if (str[low] !== str[high]) return false;
    low++, high--;
  }
  return true;
}
