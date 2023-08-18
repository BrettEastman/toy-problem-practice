// Tandem bicycle.

// A tandem bicycle is a bicycle that’s operated by two people: person a in person beach. Both people paddle the bicycle, but the person the pedals faster dictates the speed of the bicycle. So if person a pedals, at a speed of five, and person be pedals at a speed of four, the tandem bicycle moves at a speed of five

// You’re given to list of positive integers: one that contains the speeds of riders wearing red shirts, and one that contains the speeds of riders wearing blue shirts. Each rider is represented by a single positive manager, which is the speed that they pedal a tandem, bicycle at. Both list have the same length, meaning that there are as many red shirt riders is there are blue shirt riders. Your goal is to pair every writer wearing a red shirt with a writer wearing a blue shirt to operate a tandem bicycle.

// Write a function that returns the maximum possible total speed or the minimum possible total speed of all the town of bicycles, being ridden based on an input perimeter, fastest. If fastest equals, true, your function should return the maximum possible total speed otherwise it would return the minimum total speed.

// Total speed is defined as the son of the speed of all tandem bicycles being written.

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let total = 0;
  if (!redShirtSpeeds || !redShirtSpeeds.length) return total;
  let redSorted = redShirtSpeeds.sort((a, b) => a - b);
  let blueSorted = blueShirtSpeeds.sort((a, b) => a - b);
  if (fastest) {
    blueSorted = blueSorted.reverse()
  }
  for (let i = 0; i < redSorted.length; i++) {
    total += Math.max(redSorted[i], blueSorted[i]);
  }
  return total;
}