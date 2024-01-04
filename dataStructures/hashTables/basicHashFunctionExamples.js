// Just an example of a possible hash function. There are a few problems with this one such as the fact that it can only hash strings, it is not constant time, and it could be a little more random. There are ways of making it more scattered using prime numbers for example.
function hash1(key, arrayLength) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, 'c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

hash1("pink", 10); // 0
hash1("orangered", 10); // 7
hash1("cyan", 10); // 3

// slightly better version, using prime numbers to introduce more "randomness" or variety, to avoid collisions
function hash2(key, arrayLength) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }
  return total;
}

hash2("hello", 13); // 7
hash2("goodbye", 13); // 9
hash2("cyan", 13); // 5
