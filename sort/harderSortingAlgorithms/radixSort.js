// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop: 1) create buckets, for each digit 0 to 9 2) place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0, and going up to 9
// Return list at the end

// Colt Steele version:
function radixSort(nums) {
  let maxDigitCount = mostDigits2(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit2(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// Standard version:
function getDigit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

// my version:
function getDigit2(num, i) {
  num = Math.abs(num);
  let numArr = num.toString().split('').reverse()
  return parseInt(numArr[i]) || 0;
}

// Standard version:
function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// my version:
function digitCount2(num) {
  if (num === 0) {
    return 1;
  }
  num = Math.abs(num);
  let numArr = num.toString().split('');
  return numArr.length;
}

// Standard version:
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// my version:
function mostDigits2(arr) {
  let most = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = digitCount2(arr[i]);
    if (count > most) {
      most = count;
    }
  }
  return most;
}

let num = 235425;

let arr1 = [1, 2, 3333, 44, 235425, 23, 345, 9852];

// console.log(getDigit(num, 0));

// console.log(digitCount(num));

// console.log(mostDigits(arr1));

console.log(radixSort(arr1));