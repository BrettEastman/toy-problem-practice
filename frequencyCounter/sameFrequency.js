// my version:
function sameFrequency(num1, num2){
  let sNum1 = num1.toString();
  let sNum2 = num2.toString();
  if (sNum1.length !== sNum2.length) {
      return false;
  }
  let obj = {};
  for (let i = 0; i < sNum1.length; i++) {
      let current = sNum1[i];
      obj[current] ? obj[current]++ : obj[current] = 1;
  }
  for (let j = 0; j < sNum2.length; j++) {
      let current = sNum2[j];
      if (!obj[current]) {
          return false;
      } else {
          obj[current]--;
      }
  }
  return true;
}


// Julie's version:
function sameFrequency(a, b){
  const strA = a.toString();
  const strB = b.toString();
  if (strA.length !== strB.length) { return false }

  const aCounts = {};
  for (let i = 0; i &lt; strA.length; i++) {
    const char = strA[i];
    aCounts[char] = (aCounts[char] || 0) + 1;
  }
  for (let i = 0; i &lt; strB.length; i++) {
    const char = strB[i];
    if (aCounts[char] === undefined || aCounts[char] &lt;= 0) {
      return false;
    }
    aCounts[char]--;
  }
  return true;
}