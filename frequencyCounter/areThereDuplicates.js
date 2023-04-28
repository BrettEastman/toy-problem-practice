// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// my version:
function areThereDuplicates(...args) {
  let obj = {};
  for (let i = 0; i < args.length; i++) {
      let current = args[i];
      if (obj[current]) {
          return true;
      } else {
          obj[current] = true;
      }
  }
  return false;
}

// Julie's version:
function areThereDuplicates(...args) {
  // O(n log n) due to sort
  //
  var i = 0;
  var j = 1;
  args.sort((a, b) =&gt; {
    if (b &lt; a) {
      return 1;
    } else if (b &gt; a) {
      return -1;
    } else {
      return 0
    }
   });
   while (j &lt; args.length) {
     if (args[i] === args[j]) {
       return true;
     } else {
       let temp = j;
       j++;
       i = temp;
     }
   }


  return false;
}

// Colt Steele one-liner solution:
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
