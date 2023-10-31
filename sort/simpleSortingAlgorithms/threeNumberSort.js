function threeNumberSort(array, order) {
  // create an array of three numbers, starting at zero, which will count the number of each character in array
  const orderCounts = [0, 0, 0];

  for (let i = 0; i < array.length; i++) {
    let currentIndex = order.indexOf(array[i]);
    orderCounts[currentIndex]++;
  }

  // Go through the array again and replace each value with the current value in order, then decrement that value in orderCounts
  for (let j = 0; j < array.length; j++) {
    if (orderCounts[0] > 0) {
      array[j] = order[0];
      orderCounts[0]--;
    } else if (orderCounts[1] > 0) {
      array[j] = order[1];
      orderCounts[1]--;
    } else if (orderCounts[2] > 0) {
      array[j] = order[2];
      orderCounts[2]--;
    }
  }
  return array;
}

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
