// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// my version 6/1/23 - passed 2/3 tests.
function stringifyNumbers(obj) {
  if (!Object.keys(obj).length) {
      return obj;
  }
  for (let key in obj) {
      if (typeof obj[key] === 'number') {
          obj[key] = JSON.stringify(obj[key])
      } else if (typeof obj[key] === 'object') {
          obj[key] = stringifyNumbers(obj[key])
      }
  }
  return obj;
}

// Julie's version:
function stringifyNumbers(obj) {
  var newObj = {};
  for (const key in obj) {
    const curr = obj[key];
    if (typeof curr === 'object' && !Array.isArray(curr)) {
      newObj[key] = stringifyNumbers(curr);
    } else if (typeof curr === 'number') {
      newObj[key] = curr.toString();
    } else {
      newObj[key] = curr;
    }
  }
  return newObj;
}

// Colt Steele solution:
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}


let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/