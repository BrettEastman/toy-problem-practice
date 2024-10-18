// Leetcode: #208 Implement Trie (Prefix Tree)
// Description: Implement a trie with insert, search, and startsWith methods.

// my version after having watched a video on how to implement a trie in Python
class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (current.children[char] === undefined) {
      current.children[char] = new TrieNode();
    }
    current = current.children[char];
  }
  current.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
  }
  return current.endOfWord === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;

  for (let i = 0; i < prefix.length; i++) {
    let char = prefix[i];
    if (current.children[char] === undefined) {
      return false;
    }
    current = current.children[char];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
