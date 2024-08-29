// Given an array of buildings and a direction that all of the buildings face, returning array of the indices of the buildings that can see the sunset.

// The building can see the sunset if it’s strictly taller than all of the buildings that come after it in the direction that it faces.

// The input array named “buildings” contains positive, non-0 integers representing the heights of the buildings. A building at index i this has a height denoted by buildings[i]. All of the buildings face the same direction, and this direction is either east or west, to noted by the input string named direction, which will always be equal to either east or west. In relation to the input array, you can interpret these directions as right for East and left for West.

// Important note: the indices and the output array should be sorted in ascending order.

function sunsetViews(buildings, direction) {
  // create buildingsStack empty array. We are going to to be checking if the last building on the stack is shorter than the current building. If so, we will pop it off the stack. This means that only the buildings that are taller than each one after will remain in the stack. This will be our final list to return.
  let buildingsStack = [];

  // We want to create a while loop that can loop either forward or backward depending on the direction,
  // so we need to create a starting index at either beginning or ending of arr depending on direction
  let startIndex = direction === "EAST" ? 0 : buildings.length - 1;
  // and we need to create a variable called step that will either be 1 or -1 depending on direction. This will move the index either forward or backward (index += step)
  let step = direction === "EAST" ? 1 : -1;

  let i = startIndex;

  // while the index is greater than or equal to zero AND the index is less than the length of buildings
  while (i >= 0 && i < buildings.length) {
    // create a new variable currentBuildingHeight
    let currentBuildingHeight = buildings[i];
    // create a new while loop to pop off buildings from the stack that are shorter than or equal to the current building
    while (
      buildingsStack.length &&
      buildings[buildingsStack[buildingsStack.length - 1]] <=
        currentBuildingHeight
    ) {
      buildingsStack.pop();
    }
    // then push on the latest buildingsStack. This will allow us to push on the last element of the array since we know it will see the sunset, or it will be popped off by the next building if that building is taller.
    buildingsStack.push(i);

    i += step;
  }

  // if the direction is WEST, we need to reverse the array, since the prompt wants us to sort the indices in ascending order.
  if (direction === "WEST") {
    return buildingsStack.reverse();
  } else {
    return buildingsStack;
  }
}

let buildings1 = [3, 5, 4, 4, 3, 1, 3, 2];
let direction1 = "EAST";

console.log(sunsetViews(buildings1, direction1));
