// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// my version:
function averagePair(array, target){
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let currentAverage = (array[start] + array[end]) / 2;
    if (currentAverage === target) {
        return true;
    }
    if (currentAverage < target) {
        start++;
    } else {
        end--;
    }
  }
  return false;
}

// Julie's version:
function console.log(averagePair(nums, target){
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = nums.length - 1;

  while (start &lt; end) {
    const currAverage = (nums[start] + nums[end]) / 2;
    if (currAverage === target) return true;
    if (currAverage &lt; target) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

// Colt Steele solution:
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false