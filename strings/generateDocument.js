// my solution 9/20/23
function generateDocument(characters, document) {
  // create charObj
  const charObj = {};
  // create docObj
  const docObj = {};
  // for loop to add characters and their amount to charObj
  for (let char of characters) {
    if (charObj[char] === undefined) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }
  // same for docObj
  for (let char of document) {
    if (docObj[char] === undefined) {
      docObj[char] = 1;
    } else {
      docObj[char]++;
    }
  }
  // for in loop through docObj
  for (let key in docObj) {
    // if docObj[key] is not greater than or equal to charObj[key]
    if (docObj[key] > charObj[key] || charObj[key] === undefined) {
      // return false
      return false;
    }
  }
  return true;
}
