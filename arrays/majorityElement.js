// Write a function that takes in a non-empty unordered array of positive integers and returns the array’s majority element without sorting the array and without using more than constant space.

// An array’s majority element is an element of the array that appears in over half of its indices. Note that the most common element of an array (the element that appears the most times in the array) isn’t necessarily the array’s majority element; for example, the arrays [3,2,2,1] and [3,4,2,2,1] both have 2 as their most common element yet neither of these arrays have a majority element because neither 2 nor any other element appears in over half of the respective array’s indices.

// You can assume that the input array will always have a majority element.

// my solution 5/28/24:
function majorityElement(array) {
  let majorityCount = Math.floor(array.length / 2);
  let majority = -1;
  let itemCounts = {};

  if (array.length === 1) return array[0];

  for (let i = 0; i < array.length; i++) {
    let currentItem = array[i];
    if (!itemCounts[currentItem]) {
      itemCounts[currentItem] = 1;
    } else {
      itemCounts[currentItem]++;
      if (itemCounts[currentItem] > majorityCount) {
        majority = currentItem;
        majorityCount = itemCounts[currentItem];
      }
    }
  }

  return majority;
}

let test = [1, 2, 3, 2, 3, 2, 2, 4, 2];

console.log(majorityElement(test)); // 2

// Algoexpert solution:
function majorityElement(array) {
  let count = 0;
  let answer = null;

  for (const value of array) {
    if (count === 0) answer = value;
    if (value === answer) {
      count++;
    } else {
      count--;
    }
  }
  return answer;
}
