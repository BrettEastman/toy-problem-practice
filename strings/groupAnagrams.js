// Write a function that takes in an array of strings and groups anagrams together.
// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.
// Your function should return a list of anagram groups in no particular order.

// My solution 9/27/23
function groupAnagrams(words) {
  // create result arr
  const result = [];
  // for loop through words
  for (let i = 0; i < words.length; i++) {
    // create originalWordArr - arr with one word
    let originalWordArr = [words[i]];
    // create sortedOriginal (split it, sort it and rejoin it)
    let sortedOriginal = words[i].split("").sort().join("");
    // for loop through rest of words
    for (let j = i + 1; j < words.length; j++) {
      // create currentWord
      let currentWord = words[j];
      // create sortedCurrent
      let sortedCurrent = words[j].split("").sort().join("");
      // if sortedCurrent same as sortedOriginal
      if (sortedCurrent === sortedOriginal) {
        // push to originalWordArr
        originalWordArr.push(currentWord);
        // splice out currentWord
        words.splice(j, 1);
        j--;
      }
    }
    // push OriginalWordArr to resultArr
    result.push(originalWordArr);
  }
  // return result
  return result;
}

let words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(groupAnagrams(words)); // [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
