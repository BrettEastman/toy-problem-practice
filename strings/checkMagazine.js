// HackerRank string problem in Dictionaries/Hash maps category

// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// Example = "attack at dawn"  = "Attack at dawn"

// The magazine has all the right words, but there is a case mismatch. The answer is "No"

// my solution
function checkMagazine(magazine, note) {
  let magazineObj = {};
  let isSubset = true;

  for (let i = 0; i < magazine.length; i++) {
    let currentWord = magazine[i];
    if (magazineObj[currentWord] === undefined) {
      magazineObj[currentWord] = 1;
    } else {
      magazineObj[currentWord]++;
    }
  }

  for (let j = 0; j < note.length; j++) {
    let currentNote = note[j];
    if (
      magazineObj[currentNote] === undefined ||
      magazineObj[currentNote] === 0
    ) {
      console.log("No");
      isSubset = false;
      return;
    } else {
      magazineObj[currentNote]--;
    }
  }
  if (isSubset) console.log("Yes");
}
