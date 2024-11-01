// Leetcode: 636. Exclusive Time of Functions
// URL: https://leetcode.com/problems/exclusive-time-of-functions/
// Difficulty: Medium
//
// On a single-threaded CPU, we execute a program containing n functions. Each function has a unique ID between 0 and n-1.

// Function calls are stored in a call stack: when a function call starts, its ID is pushed onto the stack, and when a function call ends, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed. Each time a function starts or ends, we write a log with the ID, whether it started or ended, and the timestamp.

// You are given a list logs, where logs[i] represents the ith log message formatted as a string "{function_id}:{"start" | "end"}:{timestamp}". For example, "0:start:3" means a function call with function ID 0 started at the beginning of timestamp 3, and "1:end:2" means a function call with function ID 1 ended at the end of timestamp 2. Note that a function can be called multiple times, possibly recursively.

// A function's exclusive time is the sum of execution times for all function calls in the program. For example, if a function is called twice, one call executing for 2 time units and another call executing for 1 time unit, the exclusive time is 2 + 1 = 3.

// Return the exclusive time of each function in an array, where the value at the ith index represents the exclusive time for the function with ID i.

// Example 1:
// Input: n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
// Output: [3,4]
// Explanation:
// Function 0 starts at the beginning of time 0, then it executes 2 for units of time and reaches the end of time 1.
// Function 1 starts at the beginning of time 2, executes for 4 units of time, and ends at the end of time 5.
// Function 0 resumes execution at the beginning of time 6 and executes for 1 unit of time.
// So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.

/**
 * Calculates the exclusive time of each function based on logs.
 *
 * @param {number} n - The number of functions.
 * @param {string[]} logs - The logs representing function calls and returns.
 * @return {number[]} - An array containing the exclusive time of each function.
 */
var exclusiveTime = function (n, logs) {
  let exclusiveTimes = new Array(n).fill(0); // Initialize an array to store exclusive times for each function
  let stack = []; // Stack to keep track of function execution order
  let prevTime = 0; // Variable to track the previous timestamp

  for (let log of logs) {
    let [id, type, time] = log.split(":"); // Split the log into function id, type (start/end), and timestamp
    id = parseInt(id);
    time = parseInt(time);

    if (type === "start") {
      if (stack.length > 0) {
        // Add the time difference to the function at the top of the stack
        exclusiveTimes[stack[stack.length - 1]] += time - prevTime;
      }
      stack.push(id); // Push the current function id onto the stack
      prevTime = time; // Update the previous timestamp to the current start time
    } else {
      // Pop the function id from the stack as it ends
      exclusiveTimes[stack.pop()] += time - prevTime + 1;
      prevTime = time + 1; // Update the previous timestamp to the time after the end
    }
  }

  return exclusiveTimes; // Return the array containing exclusive times of all functions
};

// my version: (NEED TO STUDY THIS MORE):
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime2 = function (n, logs) {
  // start by creating a new Array filled with 0'x to represent each of the n functions
  let exclusiveTimes = new Array(n).fill(0);
  // create a stack. This will keep track of the function execution order. Holds function ID's
  let stack = [];
  // create a var to keep track of the previous timestamp
  let prevTime = 0;

  // for loop through the logs
  for (let log of logs) {
    // split each log into it's three parts = id, type, and time
    let [id, type, time] = log.split(":");
    // turn the id and time into numbers
    id = parseInt(id);
    time = parseInt(time);

    // if it is type start
    if (type === "start") {
      // we're going to push it to the stack, but before we do, we need to check the current excludsiveTime from the last item on the stack, then add the time - prevTime to the exclusiveTime amount.
      if (stack.length > 0) {
        let lastFunctionId = stack[stack.length - 1];
        exclusiveTimes[lastFunctionId] += time - prevTime;
      }
      // then we push it to the stack
      stack.push(id);
      // and we update the prevTime to be time (because this is where the "start" starts)
      prevTime = time;
      // otherwise if it is type end
    } else {
      // let popped = pop off the last item in the stack
      let popped = stack.pop();
      // we need to increase the exclusiveTimes[popped]    by time - prevTime + 1
      exclusiveTimes[popped] += time - prevTime + 1;
      // then also update the prevTime to time + 1
      prevTime = time + 1;
    }
  }
  // return the exclusiveTimes
  return exclusiveTimes;
};

let exampleN = 2;
let exampleLogs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
console.log(exclusiveTime2(exampleN, exampleLogs)); // Output: [3,4]
