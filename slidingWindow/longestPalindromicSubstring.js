// write a function that, given a string, returns its longest palindromic substring.
// Note that sing-character strings are palindromes.

// their solution:
function longestPalindromicSubstring(string) {
  const currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);

  function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < string.length) {
      if (string[leftIdx] !== string[rightIdx]) {
        break;
      }
      leftIdx--;
      rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
  }
}

// my solution, which is correct, but more expensive complexity-wise
function longestPalindromicSubstring(string) {
  if (!string) {
    return null;
  }
  if (string.length === 1) {
    return string;
  }
  let palindrome = string[0];

  function palindromeCheck(str) {
    let start = 0;
    let end = str.length - 1;
    while (start <= end) {
      if (str[start] === str[end]) {
        start++;
        end--;
      } else {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      let current = string.slice(i, j + 1);
      if (palindromeCheck(current) === true && current.length > palindrome.length) {
        palindrome = current;
      }
    }
  }
  return palindrome;
}

let s = "axyzzyxf"
console.log(longestPalindromicSubstring(s));