// Julie's version:
function reverse(s){
  if (!s.length) {
    return '';
  }
  const last = s.length - 1;
  return s[last] + reverse(s.slice(0, last));
}

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

// Colt Steele version:
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'