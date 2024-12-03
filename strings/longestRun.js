/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

// my first solution 3-24-23, which passed all tests
var longestRun = function (string) {
  // edge case if string is nothing
  if (!string) {
    return null;
  }
  // create indexes var [0, 0]
  let indexes = [0, 0];
  // create longest set to 1
  let longest = 1;
  // create tempLength set to 1
  let tempLength = 1;
  let tempInd;
  // create repeat set to null
  let repeatChar = null;
  let repeat = false;
  // iterate through string
  for (let i = 0; i < string.length; i++) {
    if (repeatChar === null) {
      repeatChar = string[i];
      continue;
    }
    // if current char is same as repeat
    if (string[i] === repeatChar) {
      // save the previous index as first element of indexes
      if (repeat === false) {
        tempInd = i - 1;
        repeat = true;
      }
      // increment length
      tempLength++;
      // if tempLength longer than longest,
      if (tempLength > longest) {
        // set longest to tempLength
        longest = tempLength;
        indexes[0] = tempInd;
        indexes[1] = i;
      }
      // else if current char is different than repeat
    } else if (string[i] !== repeatChar) {
      // set tempLength to zero
      tempLength = 1;
      // set repeat to current char
      repeatChar = string[i];
      repeat = false;
    }
  }
  // return indexes
  return indexes;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

let rand = (randomString(14));

console.log('rand: ', rand);
console.log(longestRun(rand));
