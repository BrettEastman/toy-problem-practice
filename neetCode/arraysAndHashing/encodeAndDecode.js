// LeetCode: No. 271 Encode and Decode Strings
// Description: Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// My solution
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  return strs.join("\n");
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  return s.split("\n");
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

// someones solution
var encode = function (strs) {
  return strs.join(String.fromCharCode(257));
};

var decode = function (s) {
  return s.split(String.fromCharCode(257));
};

// as someone pointed out, "But choosing 257, when the constraints are provided till 256 is very smart." It is because 257 is a non-printable character, so it will not be present in the input strings. So, it can be used as a delimiter.
