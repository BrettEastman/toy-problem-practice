// Write a function that takes a positive integer represented as a string number and an integer numDigits. Remove numDigtis from the string so that the number represent by the string is a large as possible afterwards.
// Note that the order of the remaining digits cannot be changed. You can assume numDigits will always be less than the length of number and greater than or equal to 0.

function bestDigits(number, numDigits) {
  const stack = [];

  // The important concept here is that, in order to keep the largest number possible, we want to remove the smallest numbers first, until we have run out of numbers to remove.
  for (let numChar of number) {
    // you don't need to convert the numChar to a number because you can compare a single digit string with greater than or less than and its the same (does not apply to numbers with multiple digits)
    while (
      stack.length > 0 &&
      numDigits > 0 &&
      numChar > stack[stack.length - 1]
    ) {
      stack.pop();
      numDigits--;
    }
    stack.push(numChar);
  }

  // After traversing the string, there may still be some numbers we can chop off, so this is needed in case, for the final number
  while (numDigits > 0) {
    stack.pop();
    numDigits--;
  }

  let result = stack.join("");
  return result;
}
