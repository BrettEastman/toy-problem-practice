// You were given a non-empty array of positive integers, representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order.

// A query's waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then, its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the duration of the first two queries.

// Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you’re given the queries of durations [1,4,5], then the total waiting time if the quarries were executed in the order of 514 would be 0+5+(5+1) = 11. The first query of duration, five would be executed immediately, so it’s waiting time would be zero, the second quarry of the duration one would have to wait five seconds (the duration of the first query) to be executed, and the last quarry would have to wait the duration of the first two queries before being executed.

function minimumWaitingTime(queries) {
  let result = 0;
  queries.sort((a, b) => a - b);
  for (let i = 0; i < queries.length - 1; i++) {
    let current = queries.slice(0, i + 1);
    result += current.reduce((acc, curr) => acc + curr);
  }
  return result;
}

let q = [3, 2, 1, 2, 6]
console.log(minimumWaitingTime(q));
