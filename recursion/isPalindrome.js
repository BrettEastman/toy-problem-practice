// Julie's version:
function isPalindrome(s){
  if (s === '') {
    return true;
  }

  if (s[0] !== s[s.length - 1]) {
    return false;
  }

  return isPalindrome(s.slice(1, s.length - 1));
}

// my version May 2023:
function isPalindrome(string){
  // add whatever parameters you deem necessary - good luck!
  if (!string.length) {
      return true;
  }
  let first = string[0];
  let last = string[string.length - 1];
  if (first !== last) {
      return false;
  } else {
      return isPalindrome(string.slice(first + 1, last))
  }
}