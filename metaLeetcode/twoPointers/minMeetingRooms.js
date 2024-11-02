// Leetcode: 253. Meeting Rooms II
// URL: https://leetcode.com/problems/meeting-rooms-ii/
// Difficulty: Medium
// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2

// Example 2:
// Input: intervals = [[7,10],[2,4]]
// Output: 1

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
  let ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b);

  let rooms = 0;
  let endPointer = 0;

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPointer]) {
      rooms++;
    } else {
      endPointer++;
    }
  }

  return rooms;
};

// my version based on the above code
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // break apart intervals into an array of beginnings and an array of endings
  let startTimes = intervals
    .map((interval) => interval[0])
    .sort((a, b) => a - b);
  let endTimes = intervals.map((interval) => interval[1]).sort((a, b) => a - b);
  let numOfRooms = 0;
  let endingPointer = 0;

  // for loop through the array of beginnings
  for (let startTime of startTimes) {
    // if currentStart is less than the first item of the ending array (endings[endingPointer])
    if (startTime < endTimes[endingPointer]) {
      // then this means that a meeting has started before the ending so we will need a room
      // and if another meeting starts before the ending, we will need an additional room
      // so increment numOfRooms as long as this is true
      numOfRooms++;
    } else {
      // increase the endingPointer to the next index. This means that we have exhausted the number of meetings that start before the ending, so we need to move it to the next ending and see if there are meetings that start before that.
      endingPointer++;
    }
  }
  return numOfRooms;
};
