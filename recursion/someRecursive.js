// Julie's version:
function someRecursive(arr, cb){
  if (!arr.length) {
      return false;
  }
  if (cb(arr[0])) {
      return true;
  }
  return someRecursive(arr.slice(1), cb)
}

// my version May 2023:
function someRecursive(array, cb){
  // add whatever parameters you deem necessary - good luck!
  if (!array.length) {
      return false;
  }
  if (cb(array[0]) === true) {
          return true;
  } else {
      array.shift();
      return someRecursive(array, cb);
  }
}

// Colt Steele version:
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false