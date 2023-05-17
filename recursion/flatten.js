// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// my version May 2023:
function flatten(arrOfArrs){
  // add whatever parameters you deem necessary - good luck!
  let currentArr = []
  if (!arrOfArrs.length) {
      return currentArr;
  }
  for (let i = 0; i < arrOfArrs.length; i++) {
      if (Array.isArray(arrOfArrs[i])) {
          currentArr = currentArr.concat(flatten(arrOfArrs[i]));
      } else {
          currentArr.push(arrOfArrs[i]);
      }
  }
  return currentArr;
}

// Julie's version:
function flatten(arr){
  if (arr.length === 0) return [];
  const first = arr[0];
  if (Array.isArray(first)) {
    return flatten(first).concat(flatten(arr.slice(1)));
  }
  return [first].concat(flatten(arr.slice(1)));
}

// Colt Steele version:
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  }
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3