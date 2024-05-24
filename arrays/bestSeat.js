// Best Seat
// You walk into a theater you are about to see a show in. The usher within the theatre walks you to your row and mentions you're allowed to sit anywhere within the given row. Naturally, you’d like to sit in the seat that gives you the most space. You also would prefer the space to be evenly distributed on either side of you example if there are three empty seats in a row, you would prefer to sit in the middle of those three seats.

// Given the theater row represented as an integer array, return the seat index of where you should sit. One’s represent occupied seats and zeros represent empty seats.

// You may assume that someone is always sitting in the first and last seat of the row. Whenever there are two equally good seats, you should sit in the seat with the lower index. If there is no seat to sit in return negative one. Given Ray will always have a length of at least one and contain only ones and zeros.

// My solution 5/24/24:
function bestSeat(seats) {
  // create startZero variable
  let startZero, stopZero;
  let zerosLength = 0;
  // create isZero bool set to false
  let isZero = false;
  // create bestSeat set to -1
  let bestSeat = -1;
  // loop through seats
  for (let i = 0; i < seats.length; i++) {
    // if not zero and isZero set to false
    if (seats[i] !== 0 && isZero === false) {
      continue;
    }
    // if zero and isZero is true
    if (seats[i] === 0 && isZero === true) {
      continue;
    }
    // if zero and isZero is false,
    if (seats[i] === 0 && isZero === false) {
      // mark isZero as true
      isZero = true;
      // mark the startZero index
      startZero = i;
      // otherwise if not zero and isZero set to true
    } else {
      // isZero set to false
      isZero = false;
      // stopZero set to current index
      stopZero = i;
      // bestSeat is startZero plus Math.floor(stopZero minus startZero / 2)
      if (stopZero - startZero > zerosLength) {
        zerosLength = stopZero - startZero;
        if (zerosLength % 2 === 0) {
          bestSeat = startZero + Math.floor(zerosLength / 2) - 1;
        } else {
          bestSeat = startZero + Math.floor(zerosLength / 2);
        }
      }
    }
  }
  return bestSeat;
}

let test = [1, 0, 0, 0, 1, 0, 1];
console.log(bestSeat(test));

// Algoexpert solution:
function bestSeat(seats) {
  let bestSeat = -1;
  let maxSpace = 0;

  let left = 0;

  while (left < seats.length) {
    let right = left + 1;
    while (right < seats.length && seats[right] === 0) {
      right++;
    }
    const availableSpace = right - left - 1;
    if (availableSpace > maxSpace) {
      bestSeat = Math.floor((left + right) / 2);
      maxSpace = availableSpace;
    }
    left = right;
  }

  return bestSeat;
}
