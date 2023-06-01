// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

// my version 5-26-23
function nestedEvenSum (obj) {
  if (!Object.keys(obj).length) {
    return 0;
  }
  let sum = 0;
  for (prop in obj) {
      let val = obj[prop];
      if (typeof val === 'number' && val % 2 === 0) {
          sum += val;
      }
      if (typeof val === 'object') {
          sum += nestedEvenSum(val)
      }
  }
  return sum;
}

// Julies solution:
function nestedEvenSum (obj) {
  let sum = 0;
  for (const key in obj) {
    const curr = obj[key];
    if (typeof curr === 'object') {
      sum += nestedEvenSum(curr)
    }
    if (curr % 2 === 0) {
      sum += curr;
    }
  }
  return sum;
}

// Colt Steele solution:
function nestedEvenSum (obj, sum=0) {
  for (var key in obj) {
      if (typeof obj[key] === 'object'){
          sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10