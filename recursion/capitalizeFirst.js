// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// my solution:
function capitalizeFirst (arr) {
  // if no arr length, return []
  if (!arr || !arr.length) {
      return [];
  }
  let wordArr = arr.shift().split('');
  wordArr[0] = wordArr[0].toUpperCase();
  let result = [wordArr.join('')]
  return result.concat(capitalizeFirst(arr));
}

// Julie's version:
function capitalizeFirst (strings) {
  if (strings.length === 0) {
  return [];
}
const first = strings[0][0].toUpperCase();
var rest = strings[0].substring(1);
var newWord = first + rest;
return [newWord].concat(capitalizeFirst(strings.slice(1)));
}

// Colt Steele solution:
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
