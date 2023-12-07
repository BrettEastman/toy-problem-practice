// You are given two strings - stringOne and stringTwo. Write a function that determines if these two strings can be made equal using only one edit.

// There are three possible edits:

// Replace: one character and one string is swapped for a different character.
// Add: one character is added at any index, and one string.
// Remove: one character removed at any index and one string

// Note that both strings will contain at least one character. If the strings are the same, your function should return true.

// my version, which passed all the tests
function oneEdit(stringOne, stringTwo) {
  if (stringOne === stringTwo) return true;

  let shorter;
  let longer;

  if (stringOne.length > stringTwo.length) {
    shorter = stringTwo;
    longer = stringOne;
  } else {
    shorter = stringOne;
    longer = stringTwo;
  }

  let count = 0;

  if (stringOne.length === stringTwo.length) {
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        count++;
      }
    }
    return count === 1 ? true : false;
  } else if (Math.abs(stringOne.length - stringTwo.length) === 1) {
    for (let i = 0; i < shorter.length; i++) {
      if (longer[i] !== shorter[i]) {
        return longer.slice(i + 1) === shorter.slice(i);
      }
    }
    return true;
  }
  return false;
}

// Their solution
function oneEdit(stringOne, stringTwo) {
  const lengthOne = stringOne.length;
  const lengthTwo = stringTwo.length;
  if (Math.abs(lengthOne - lengthTwo) > 1) return false;

  for (let i = 0; i < Math.min(lengthOne, lengthTwo); i++) {
    if (stringOne[i] !== stringTwo[i]) {
      if (lengthOne === lengthTwo) {
        return stringOne.slice(i + 1) === stringTwo.slice(i + 1);
      } else if (lengthOne > lengthTwo) {
        return stringOne.slice(i + 1) === stringTwo.slice(i);
      } else {
        return stringOne.slice(i) === stringTwo.slice(i + 1);
      }
    }
  }
}
