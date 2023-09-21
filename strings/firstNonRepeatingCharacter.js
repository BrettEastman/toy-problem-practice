// Write a function that takes in a string of lowercase English alphabet letters, and returned the index of the strings first nonrepeating character.

// The first nonrepeating character is the first character in a string that occurs only wants

// If the input string doesn’t have any nonrepeating characters your function should return -1.

// My solution
function firstNonRepeatingCharacter(string) {
  const stringArr = string.split("");

  for (let i = 0; i < stringArr.length; i++) {
    let currentChar = stringArr[i];
    let leftSlice = stringArr.slice(0, i);
    let rightSlice = stringArr.slice(i + 1);
    // if currentChar not in right or left slices
    if (!leftSlice.includes(currentChar) && !rightSlice.includes(currentChar)) {
      // return index
      return i;
    }
  }

  return -1;
}
