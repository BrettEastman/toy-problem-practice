// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. Try to do it with O(n) time complexity

// my solution:
function validAnagram(str1, str2){
  if (str1.length !== str2.length) {
      return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let char of str1) {
    obj1[char] ? obj1[char]++ : obj1[char] = 1
  }
  for (let char of str2) {
    obj2[char] ? obj2[char]++ : obj2[char] = 1
  }
  for (let char in obj1) {
      if (obj1[char] !== obj2[char]) {
          return false;
      }
  }
  return true;
}

// Colt Steele solution:
function validAnagram(first, second){
  if (first.length !== second.length) {
      return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length: i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}