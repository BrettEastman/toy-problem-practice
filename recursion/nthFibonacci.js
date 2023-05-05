/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

// their recursive solution (expensive though):
var fibRecurs = (n) => n < 2 ? n : fibRecurs(n - 1) + fibRecurs(n - 2);

// my recursive solution:
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

// their solution, similar to mine, but with function memoization:
var fibMem = function(n) {
  if (fibMem.mem[n]) return fibMem.mem[n];
  for (let i = 0; i <= n; i++) {
    fibMem.mem[i] = i < 2 ? i : fibMem.mem[i - 2] + fibMem.mem[i - 1];
  }
  return fibMem.mem[n];
}
nFib.mem = [];

// their solution which is better for space complexity as it removes unneeded?
var fibSpace = function(n) {
  var mem = [0, 1];
  for (; n > 1; n--) {
    mem.push(mem.shift() + mem[0]);
  }
  return mem[n];
}

// my solution, which is correct:
var nthFibonacci = function (n) {
  // create fib which is array with 0 and 1
  const fib = [0, 1];
  // if n equals 0, return 0
  if (n === 0) {
    return 0;
  }
  // if n equals 1, return 1
  if (n === 1) {
    return 1;
  }
  // iterate up to n
  for (let i = 2; i <= n; i++) {
    let tempNum = fib[i - 2] + fib[i - 1];
    fib.push(tempNum);
  }
  // return fib number at n index
  return fib[n];
};

console.log(nthFibonacci(14)); // => 1