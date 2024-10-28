// Leetcode: 71. Simplify Path
// URL: https://leetcode.com/problems/simplify-path/
// Difficulty: Medium

// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// The rules of a Unix-style file system are as follows:

// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
// The simplified canonical path should follow these rules:

// The path must start with a single slash '/'.
// Directories within the path must be separated by exactly one slash '/'.
// The path must not end with a slash '/', unless it is the root directory.
// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// Return the simplified canonical path.

// my solution:
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // split the path on the / to create an arr of items
  let pathArr = path.split("/");
  // create resultArr
  let result = [];

  for (let item of pathArr) {
    if (item === "..") {
      result.pop();
      continue;
    }
    if (item === "" || item === ".") {
      continue;
    }
    result.push(item);
  }

  // if resultArr doesn't have length
  if (!result.length || !result) {
    return "/";
  } else {
    return "/" + result.join("/");
  }
};

// Someone's one-liner solution that I modified and made more readable:
var simplifyPath2 = function (path) {
  return `/${path
    .split("/")
    .filter((item) => item !== "" && item !== ".")
    .reduce(
      (acc, item) => (item === ".." ? acc.pop() : acc.push(item), acc), //the extra "acc" at the end is to return the acc array
      []
    )
    .join("/")}`;
};

// Co-pilot solution:
var simplifyPath3 = function (path) {
  return `/${path
    .split("/")
    .filter((el) => el && el !== ".")
    .reduce(
      (acc, el) =>
        el === ".." ? acc.slice(0, acc.lastIndexOf("/")) : `${acc}/${el}`,
      ""
    )}`;
};

let examplePath = "/home/user/Documents/../Pictures";
console.log(simplifyPath2(examplePath)); // "/home/user/Pictures"
