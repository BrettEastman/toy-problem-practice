// Write a function that takes in an array of integers and returns of bullion, representing whether the array is monotonic. An array is said to be monotonic if its elements, from left to right, or entirely non-increasing or entirely non-decreasing. Non-increasing elements aren’t necessarily exclusively decreasing; they simply don’t. Similarly, non-decreasing elements aren’t necessarily exclusively increasing; they simply don’t decrease. Note that empty array, and a raise of one element or monotonic.

// my solution 3/29/24
function isMonotonic(array) {
  if (array.length <= 2) return true;

  let increasing = JSON.parse(JSON.stringify(array)).sort((a, b) => a - b);
  let decreasing = JSON.parse(JSON.stringify(array)).sort((a, b) => b - a);
  let incTrue = true;
  let decTrue = true;

  for (let i = 0; i < increasing.length; i++) {
    if (increasing[i] !== array[i]) {
      incTrue = false;
      break;
    }
  }
  for (let j = 0; j < decreasing.length; j++) {
    if (decreasing[j] !== array[j]) {
      decTrue = false;
      break;
    }
  }
  if (incTrue || decTrue) {
    return true;
  } else {
    return false;
  }
}

// AlgoExpert and copilot solution
function isMonotonic(array) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      increasing = false;
    }
    if (array[i] > array[i - 1]) {
      decreasing = false;
    }
  }
  return increasing || decreasing;
}
