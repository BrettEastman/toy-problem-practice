// Min Max Stack Construction
// Write a MinMaxStack class for a Min Max Stack. The class should support:
// - Pushing and popping values on and off the stack.
// - Peeking at the value at the top of the stack.
// - Getting both the minimum and the maximum values in the stack at any given point in time.
// All class methods, when considered independently, should run in constant time and with constant space.

class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    let result = this.stack.pop();
    this.minMaxStack.pop();
    return result;
  }

  push(number) {
    this.stack.push(number);
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length > 0) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(number, lastMinMax.min);
      newMinMax.max = Math.max(number, lastMinMax.max);
    }
    this.minMaxStack.push(newMinMax);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// Sample Usage
// All operations below are performed sequentially.
MinMaxStack();
push(5);
getMin(); // 5
getMax(); // 5
peek(); // 5
push(7);
getMin(); // 5
getMax(); // 7
peek(); // 7
push(2);
getMin(); // 2
getMax(); // 7
peek(); // 2
pop();
pop();
getMin(); // 5
getMax(); // 5
peek(); // 5
