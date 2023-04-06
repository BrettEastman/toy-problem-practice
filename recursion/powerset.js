// Algoexpert
// Write a function that takes in a an array of unique integers and returns its powerset. The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1, 2] is [[], [1], [2], [1, 2]]. Note that the sets in the powerset do not need to be in any particular order.

// my solution, based off of the powerset Toy Problem solution:
function powerset(array) {
  const strObj = {};
  const result = [];

  // recursive function with 2 params - set, options
  const recursive = function(set, options) {
    if (set.length <= array.length) {
      let sorted = set.sort()
      let strSet = JSON.stringify(sorted);
      strObj[strSet] = true;
    } else {
      return;
    }
    // iterate over options
    for (let i = 0; i < options.length; i++) {
      let tempSet = set.concat([options[i]]);
      let tempOptions = options.slice(0, i).concat(options.slice(i + 1));
      recursive(tempSet, tempOptions);
    }
  }

  // recursive func ([], array)
  recursive([], array)
  // strings = Object.keys(result)
  const strKeys = Object.keys(strObj);
  // iterate over strings
  for (let j = 0; j < strKeys.length; j++) {
    let tempParse = JSON.parse(strKeys[j]);
    result.push(tempParse);
  }
  return result;
}