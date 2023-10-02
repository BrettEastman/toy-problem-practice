// Valid IP addresses

// You’re given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses that can be created by inserting 3 “.”’s in the string.

// An IP address is a sequence of four positive integers that are separated by periods, or each individual integers within the range of 0 to 255, inclusive.

// An IP address isn’t valid of any of the individual integers contains leading zeros. For example, 192.168.0.1 is a valid IP address, but 192.168.00.1 or 192.168.0.01 is not because it contains 00 or 01 respectively. Another example of valid IP address is 99.1.1.10

// Your function should return the IP address and string format and no particular order. If no valid IP addresses can be created from the string, your function should return an empty list.

function validIPAddresses(string) {
  // chatGPT correct version, plus my original helper function
  const resultArr = [];

  for (let i = 1; i < 4 && i < string.length; i++) {
    for (let j = i + 1; j < i + 4 && j < string.length; j++) {
      for (let k = j + 1; k < j + 4 && k < string.length; k++) {
        const part1 = string.slice(0, i);
        const part2 = string.slice(i, j);
        const part3 = string.slice(j, k);
        const part4 = string.slice(k);

        if (
          isValidInt(part1) &&
          isValidInt(part2) &&
          isValidInt(part3) &&
          isValidInt(part4)
        ) {
          resultArr.push(`${part1}.${part2}.${part3}.${part4}`);
        }
      }
    }
  }

  return resultArr;
}

function isValidInt(s) {
  if (s.length > 1 && s[0] === "0") {
    return false;
  }
  let num = parseInt(s);
  if (num <= 255 && num >= 0) {
    return true;
  }
  return false;
}
