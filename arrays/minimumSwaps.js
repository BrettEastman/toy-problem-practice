// Another persons solution, originally in Python. This is correct on HackerRank:
// Here's an explanation of this code's logic that a 10-year-old might understand:

// Imagine you have a bunch of cards, and they are all mixed up in a random order. Your job is to sort these cards in ascending order, like numbers from 1 to N, where N is the total number of cards. But here's the catch: you can only swap the positions of two cards at a time.

// Here's how the code helps you do that:

// It starts by making a copy of your card arrangement and sorts it to create a reference arrangement in the correct order.

// It then creates a dictionary (an object that will store the value and its index) that tells you where each card is in your original arrangement. It's like having a map to find each card's position quickly.

// The code will count how many swaps you make to sort the cards.

// It goes through your cards one by one. For each card, it checks if it's in the correct position according to the reference arrangement.

// If a card is not in the right place, the code looks at its map to find the card that should be there and swaps them. It also updates the map to remember the new positions of the swapped cards.

// Each time a swap is made, the code keeps track of it, and at the end, it tells you how many swaps were needed to sort all the cards.

function minimumSwaps1(arr) {
  const refArr = [...arr].sort((a, b) => a - b);
  const indexDict = {};
  let swaps = 0;

  for (let i = 0; i < arr.length; i++) {
    indexDict[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    const correctValue = refArr[i];
    const value = arr[i];

    if (value !== correctValue) {
      const toSwapIndex = indexDict[correctValue];
      [arr[toSwapIndex], arr[i]] = [arr[i], arr[toSwapIndex]];
      indexDict[value] = toSwapIndex;
      indexDict[correctValue] = i;
      swaps++;
    }
  }

  return swaps;
}

// Google AI solution, which is correct on HackerRank:
function minimumSwaps(arr) {
  // Create a position map array
  const positionMap = new Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    positionMap[arr[i] - 1] = i;
  }

  console.log(positionMap);
  // Initialize the swap count and the current position
  let swapCount = 0;
  let currentPosition = 0;

  // Loop through all array members
  while (currentPosition < arr.length) {
    // Check if the current member is already at its correct position
    if (arr[currentPosition] === currentPosition + 1) {
      // If yes, increment the current position and continue
      currentPosition++;
      continue;
    }

    // Find the integer within the array that does match the position
    const matchingInteger = positionMap[currentPosition];

    // Swap the matching integer and the current integer
    [arr[currentPosition], arr[matchingInteger]] = [
      arr[matchingInteger],
      arr[currentPosition],
    ];

    // Increment the swap count
    swapCount++;

    // Update the position map
    positionMap[arr[currentPosition] - 1] = currentPosition;
    positionMap[arr[matchingInteger] - 1] = matchingInteger;
  }

  // Return the swap count
  return swapCount;
}

// my first attempt - only passed 2 out of 3 tests
// function minimumSwaps(arr) {
//   // create count variable set to zero
//   let count = 0;

//   // use selectionSort algortithm which has minimum number of swaps
//   // for loop with semicolons through arr
//   for (let i = 0; i < arr.length; i++) {
//     // i starts out as lowest
//     let lowest = i;
//     // inner for loop starting at i + 1 going up to end of arr
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//         // increment count
//         count++;
//       }
//     }

//     // if i is not equal to lowest
//     if (i !== lowest) {
//       // swap arr[i] with arr[lowest]
//       [arr[i], (arr[lowest] = arr[lowest]), arr[i]];
//     }
//   }
//   // return count
//   return count;
// }

// let arr1 = [4, 3, 1, 2];
// let arr2 = [2, 3, 4, 1, 5];
let arr3 = [1, 3, 5, 2, 4, 6, 7];

console.log(minimumSwaps1(arr3));
