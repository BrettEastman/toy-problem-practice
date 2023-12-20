// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note Each toy can be purchased only once.

// my 2nd attempt after looking at the discussion board - my version of someone else's idea. The great thing about this one is that it sorts the array first, so you don't have to worry about the order of the toys. You just have to worry about the total cost of the toys. And you can stop the loop as soon as you go over the total cost which is a nice optimization.
function maximumToys(prices, k) {
  let sorted = prices.sort((a, b) => a - b);
  let i = 0;

  while (k >= 0) {
    k -= sorted[i];
    if (k >= 0) {
      i++;
    } else {
      return i;
    }
  }
}

// my first attempt which only solved 13/18 test cases. It is not optimized at all. It is O(n^2) because of the nested for loops. I think the problem is that it's not sorting the array first, so it's not always getting the maximum number of toys. It's just getting the maximum number of toys in the order that they are in the array.
function maximumToys(prices, k) {
  // create maxArray
  let maxArray = [];

  // for loop main
  for (let i = 0; i < prices.length; i++) {
    // create total variable = 0
    let total = 0;
    // create currentMaxToys = 0;
    let currentMaxToys = 0;
    // for loop inner (each one add to total if possible)
    for (let j = i; j < prices.length; j++) {
      // if total will not be greater than k,
      if (total + prices[j] <= k) {
        // then add amount to total
        total += prices[j];
        // increment currentMaxToys
        currentMaxToys++;
      }
    }
    // push currentMaxToys to maxArray
    maxArray.push(currentMaxToys);
  }
  return Math.max(...maxArray);
}
