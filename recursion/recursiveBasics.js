// POWER
// Julie's solution
function power(base, exp){
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// my solution:
function power(base, exponent){
  if (exponent === 0) {
      return 1;
  }
  return base * (power(base, exponent - 1))
}


// FACTORIAL
// Julie's
function factorial(n){
  if (n &lt;= 0) return 1;
  return n * factorial(n - 1);
}

// my solution:
function factorial(num){
  if (num === 0) {
      return 1;
  }
  return num * factorial(num - 1);
}


// PRODUCT OF ARRAY
// Julie's
function productOfArray(nums) {
  if (!nums.length) {
    return 1;
  }
  return nums[0] * productOfArray(nums.slice(1));
}

// my solution:
function productOfArray(array) {
  if (!array.length) {
      return 1;
  }
  return array[0] * productOfArray(array.slice(1));
}


// RECURSIVE RANGE
// Julie's
function recursiveRange(n){
  if (n <= 0) return 0;
  return n + recursiveRange(n - 1);
}

// my solution:
function recursiveRange(num){
  if (!num) {
      return 0;
  }
  return num + recursiveRange(num - 1);
}


// FIBONACCI
// Julie's:
function fib(n){
  if (n === 1) return 1;
  if (n <= 0) return 0;
  return fib(n - 1) + fib(n - 2);
}

// my solution:
function fib(num){
  // add whatever parameters you deem necessary - good luck!
  if (num === 1) {
      return 1;
  }
  if (num === 2) {
      return 1;
  }
  return fib(num - 1) + fib(num - 2);
}