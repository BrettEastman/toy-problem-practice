// Hackerrank problem - the title is misleading, we are really just finding the minimum number of characters to remove from both strings so that they are an anagram

// Instructions:
// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

// this is a pretty genius solution I saw in discussion and made my own. We are basically seeing if a letter from string a is in string b, and if so, then we remove that letter from string b. If it's not there, then we add to the "count" variable (i.e. we found a letter that is in string a only). So we are counting in two different ways. The count adds up the letters that are not in string b, and in the end, the length of what's left of string b will be the count of letters not in string a. Pretty cool!
function makeAnagram(a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    let currentLetter = a[i];
    if (b.includes(currentLetter)) {
      b = b.replace(currentLetter, "");
    } else {
      count++;
    }
  }
  return count + b.length;
}
