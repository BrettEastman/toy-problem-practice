// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// my version 6/1/23
function collectStrings(obj) {
  let result = [];
  if (!Object.keys(obj).length) {
      return result;
  }
  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          result.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
          result = result.concat(collectStrings(obj[key]))
      }
  }
  return result;
}

// Julie's version:
function collectStrings(obj) {
  let res = [];

  for (const key in obj) {
    const curr = obj[key];
    if (typeof curr === 'string') {
      res.push(curr);
    } else if (typeof curr === 'object') {
      res = res.concat(collectStrings(curr));
    }
  }

  return res;
}

// Colt Steele solution:
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])