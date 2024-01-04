// This is a basic implementation of a hash table, not meant for actual use, just educational. For example, with the set method, in a real hash table we would be checking to make sure that the key doesn't exist already. If so, we would write over the previous value, just like with a javascript object.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        let currentBucket = this.keyMap[i];
        for (let j = 0; j < currentBucket.length; j++) {
          keys.push(currentBucket[j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        let currentBucket = this.keyMap[i];
        for (let j = 0; j < currentBucket.length; j++) {
          let currentVal = currentBucket[j][1];
          if (!values.includes(currentVal)) {
            values.push(currentVal);
          }
        }
      }
    }
    return values;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("duplicate1", "#DDA0DD");
ht.set("duplicate2", "#DDA0DD");

//console.log("ht:", ht);
// let result = ht.get("maroon");
// console.log("result:", result);

let hashKeys = ht.keys();
console.log(hashKeys);
let hashvals = ht.values();
console.log(hashvals);
