/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

// HR official version:
Array.prototype.isSubsetOf = function (arr) {
  let obj = objectify(arr);

  return this.reduce(function(acc, value) {
    if (!obj[value]) {
      return false;
    }
    return acc;
  }, true)

  function objectify(arr) {
    let result = {};
    arr.forEach(function(value) {
      result[value] = 1;
    })
    return result;
  }
}

// my version 3-21-23
Array.prototype.isSubsetOf = function (arr) {
  // we want to see if what is in this is in arr
  // create result var set to true
  const result = true;
  // iterate over this and see if each element is in arr
  for (let i = 0; i < this.length; i++) {
    // if an element is not in arr
    if (!arr.includes(this[i])) {
      // result to false
      result = false;
      // return
      return;
    }
  }
  // return result
  return result;
};

var a = ['commit','push']
console.log(a.isSubsetOf(['commit','rebase','push','blame'])) // true

var b = ['merge','reset','reset']

console.log(b.isSubsetOf(['reset','merge','add','commit'])) // true

var b = ['merge','reset','reset', 'urge']

console.log(b.isSubsetOf(['reset','merge','add','commit'])) // false