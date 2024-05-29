// You are hosting an event at a food fesitval and want to  sowcase the best possible pairing of two dishes from the fistival that complement each other's flavor profile.

// Each dish has a flavor profile represented by an integer. A negative integer means a dish is sweet, while a positive integer means a dish is savory. The absolute value of the integer represents the strength of the flavor profile. For example, a flavor profile of -3 is slightly sweet, one of -10 is extremely sweet, one of 2 is slightly savory, and one of 10 is significantly savory.

// You're given an array of these dishes and a target combined flavor profile. Write a function that returns the best possible pairing of two dishes (the pairing with a total flavor profile that's closest to the target one). Note that this pairing must include one sweet and one savory dish. You're also concerned about the dish being too savory, so your pairing should never be more savory than the target flavor profile.

// All dishes will have a positive or negative flavor profile; there are no dishes with a 0 value. For simplicicty, you can assume that there will be at most one best solution. If there isn't a valid solujtion, your function hsould return [0.0]. The returned array should be sorted, meaning the sweet dish should be the first element in the array.

// my solution 5/29/24:
function sweetAndSavory(dishes, target) {
  let result = [0, 0];
  let difference = Infinity;
  dishes.sort((a, b) => a - b);
  let sweet = [];
  let savory = [];

  for (let dish of dishes) {
    if (dish > 0) {
      savory.push(dish);
    } else {
      sweet.push(dish);
    }
  }

  if (savory.length === 0 || sweet.length === 0) {
    return result;
  }

  for (let i = 0; i < sweet.length; i++) {
    let currentSweet = sweet[i];
    for (let j = 0; j < savory.length; j++) {
      let currentSavory = savory[j];
      if (currentSweet + currentSavory > target) {
        break;
      }
      let currentDifference = target - (currentSweet + currentSavory);

      if (currentDifference === 0) {
        result[0] = currentSweet;
        result[1] = currentSavory;
        return result;
      }

      if (currentDifference < difference) {
        difference = currentDifference;
        result[0] = currentSweet;
        result[1] = currentSavory;
      }
    }
  }
  return result;
}

let test = [-3, -5, 1, 7];
let target = 8;

console.log(sweetAndSavory(test, target));
