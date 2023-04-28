// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// my version:
function isSubsequence(sub, string) {
  if (!string.length || sub.length > string.length) {
      return false;
  }
  let i = 0;
  for (let j = 0; j < string.length; j++) {
      if (string[j] === sub[i] && i < sub.length) {
          i++;
      }
  }
  return i === sub.length;
}

// Julie's version:
function isSubsequence(s, t) {
  // good luck. Add any arguments you deem necessary.
  let i = 0;
  // edge cases?
  if (!t.length &amp;&amp; s.length) return false;
  if (!t.length) return true;

  for (let j = 0; j &lt; t.length; j++) {
    if (s[i] === t[j]){
      i++;
    }
  }
  return i === s.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)