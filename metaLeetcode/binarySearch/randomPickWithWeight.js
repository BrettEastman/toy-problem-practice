// Leetcode: 528. Random Pick with Weight

// You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.
// You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).

// For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  // we need to create a variable total, that will get the total of all weights
  this.total = 0;
  // we need to create an array with the running sum of each index of the w array
  // the cumulative sums represent probability. They are like buckets - the first one starts from outside the array (index -1), then the next bucket goes from index 0 to index 1, and so on.
  this.runningSums = [];

  // Here is where we do the calculation for both:
  for (let weight of w) {
    this.total += weight;
    this.runningSums.push(this.total);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const randomInt = Math.floor(Math.random() * this.total) + 1;

  // lowIndex and highIndex are the bounds of the search range
  let lowIndex = 0;
  let highIndex = this.runningSums.length;
  let mid;

  // we're looking for the first value that is greater than randomInt
  while (lowIndex < highIndex) {
    // this will be the middle index of the search range
    mid = Math.floor((lowIndex + highIndex) / 2);
    if (this.runningSums[mid] < randomInt) {
      // then it can't be mid, randomInt has to be in a bucket that starts on the index mid + 1 or greater
      // it means that randomInt falls in a range that starts after mid
      lowIndex = mid + 1;
      // Otherwise randomInt falls in a range that includes mid or starts before mid. Therefore, we need to keep mid as a possible candidate.
    } else {
      highIndex = mid;
    }
  }
  // The loop terminates when lowIndex is no longer less than highIndex
  // At this point, lowIndex is the index of the first value that is greater than randomInt
  return lowIndex;
};

// Why This Works
// In a typical binary search, you are looking for an exact match. However, in this case, you are looking for the position where randomInt would fit in the cumulative sum array. This is why the conditions for updating lowIndex and highIndex are slightly different.

// If this.runningSums[mid] < randomInt:
// randomInt is greater than the cumulative sum at mid, so it must be in a range that starts after mid. Hence, lowIndex is updated to mid + 1.

// Else:
// randomInt is less than or equal to the cumulative sum at mid, so it must be in a range that includes mid or starts before mid. Hence, highIndex is updated to mid.

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
