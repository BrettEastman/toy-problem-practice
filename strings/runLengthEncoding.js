// Run-length encoding

// Write a function that takes in a non-empty string and returns its run length encoding.

// From Wikipedia, “run length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run.” For this problem, a run of data is any sequence of consecutive identical characters. So the run AAA would be run-length-encoded as 3A.

// To make things more complicated however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can’t naïvely run-length-encode long runs. For example, the run AAAAAAAAAAAA (12 A’s), can’t naïvely being coded as 12A, since this string can be decoded as either AAAAAAAAAAAA or 1AA. This long runs runs of 10 or more characters should be encoded in a split fashion. The aforementioned run should be in coded as 9A3A.

function runLengthEncoding(string) {
  // create arrForEncodedResult
  const arrForEncodedResult = [];
  // create currentRunLength
  let currentRunLength = 1;
  // for loop over the string starting on the second char
  for (let i = 1; i < string.length; i++) {
    // create prevChar var
    let prevChar = string[i - 1];
    // create currentChar var
    let currentChar = string[i];
    // if the currentChar does not equal prevChar or cRL equals 9
    if (currentChar !== prevChar || currentRunLength === 9) {
      // then push the stringified cRL
      arrForEncodedResult.push(currentRunLength.toString());
      // also push the the previous char
      arrForEncodedResult.push(prevChar);
      currentRunLength = 1;
    } else {
      currentRunLength++;
    }
  }
  // for the last one, push the stringified cRL and push the last char of the string
  arrForEncodedResult.push(currentRunLength.toString());
  arrForEncodedResult.push(string[string.length - 1]);
  // return the joined arrForEncodedResult
  return arrForEncodedResult.join("");
}
