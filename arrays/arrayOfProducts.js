// Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

// My solution with the helper function
function arrayOfProducts(array) {
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    let arrCopy = [...array];
    arrCopy.splice(i, 1);
    let currentProduct = arrayProduct(arrCopy);
    resultArr.push(currentProduct);
  }
  return resultArr;
}

// Helper function to calculate the product of an array
function arrayProduct(array) {
  let result = 1;
  for (let num of array) {
    result *= num;
  }
  return result;
}

// Algoexpert solution
function arrayOfProducts(array) {
  const products = [];

  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProduct *= array[j];
      }
    }
    products[i] = runningProduct;
  }
  return products;
}

let arr = [5, 4, 1, 2];

const answer = arrayOfProducts(arr);
console.log(answer);
