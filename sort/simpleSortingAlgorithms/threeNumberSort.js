//Three numbers sort

// You’re given an array of integers and another array of three distinct integers. The first array is guaranteed to only contain integers that are in the second array, and the second array represents a desired order for the integers in the first array. For example, a second array of [x,y,z] represents a desired order of [x,x,x,x,y,y,y,z,z,] in the first array.

// Write a function that sorts the first array according to the desired order in the second array

// The function should perform this in place (i.e. it should mutate the input array) and it shouldn’t use any auxiliary space (i.e. it should should run with O(1) constant space)

// Note that the desired order won’t necessarily be ascending or descending, and that the first array won’t necessarily contain all three integers found in the second array, it might only contain one or two.

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
