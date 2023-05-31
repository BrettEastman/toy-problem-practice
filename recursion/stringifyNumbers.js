// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// Julie's version:
function stringifyNumbers(obj) {
  var newObj = {};
  for (const key in obj) {
    const curr = obj[key];
    if (typeof curr === 'object' &amp;&amp; !Array.isArray(curr)) {
      newObj[key] = stringifyNumbers(curr);
    } else if (typeof curr === 'number') {
      newObj[key] = curr.toString();
    } else {
      newObj[key] = curr;
    }
  }
  return newObj;
}


/*
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
/*

stringifyNumbers(obj)

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