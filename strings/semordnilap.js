// Write a function semordnilap() that takes a list of unique strings and returns a list of semordnilap pairs.
// A semordnilap is a word or a phrase that spells a different word when backwards ("semordnilap" is a semordnilap of "palindromes").

// My solution 9/25/23
function semordnilap(words) {
  let copyWords = JSON.parse(JSON.stringify(words));

  const resultArr = [];

  while (copyWords.length) {
    let currentWord = copyWords.shift();
    let reverseWord = currentWord.split("").reverse().join("");
    for (let i = 0; i < copyWords.length; i++) {
      if (copyWords[i] === reverseWord) {
        let duple = [];
        duple.push(currentWord, reverseWord);
        resultArr.push(duple);
        copyWords.splice(i, 1);
      }
    }
  }
  return resultArr;
}
