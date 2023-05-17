// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// my version:
function reverse(string){
  // add whatever parameters you deem necessary - good luck!
  let reversed = "";
  let lastInd = string.length - 1;
  if (string.length) {
      reversed += string[lastInd]
      reversed += reverse(string.slice(0, lastInd))
  }
  return reversed;
}

// Julie's version:
function reverse(s){
  if (!s.length) {
    return '';
  }
  const last = s.length - 1;
  return s[last] + reverse(s.slice(0, last));
}

// Colt Steele version:
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'