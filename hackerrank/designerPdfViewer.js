function designerPdfViewer(h, word) {
  // create letterIndices arr
  let letterIndices = [];
  // for loop through word
  for (let i = 0; i < word.length; i++) {
    // get charCode of each letter - 97 and add to letterIndices
    letterIndices.push(word.charCodeAt(i) - 97);
  }
  let heights = letterIndices.map((item) => h[item]);
  let x = heights.length;
  let y = Math.max(...heights);
  return x * y;
}

let exampleH = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];
let exampleWord = "zaba";

console.log(designerPdfViewer(exampleH, exampleWord));
