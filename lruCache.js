// Leetcode #146: LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3

class LRUCache {
  constructor(capacity) {
    // Initialize the LRUCache with the specified capacity.
    this.cache = new Map(); // Use a Map to store key-value pairs.
    this.capacity = capacity; // Set the maximum number of elements that the cache can hold.
  }

  get(key) {
    // Retrieve a value from the cache using the given key.

    // If the key is not in the cache, return -1 to indicate a cache miss. "has" is a method on the Map object that returns true if the key is in the Map and false otherwise.
    if (!this.cache.has(key)) return -1;

    // If the key is in the cache, update its access position (make it most recently accessed).
    const val = this.cache.get(key); // Get the value associated with the key.
    this.cache.delete(key); // Remove the key from its current position.
    this.cache.set(key, val); // Re-insert the key-value pair to make it the most recently used.

    return this.cache.get(key); // Return the value associated with the key.
  }

  put(key, value) {
    // Add a key-value pair to the cache or update the value for an existing key.

    if (this.cache.has(key)) {
      // If the key is already in the cache, remove it to update the value.
      this.cache.delete(key);
    }

    // Set the new key-value pair in the cache.
    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      // If the cache size exceeds the specified capacity, remove the least recently used item. When we call this.cache.keys(), it returns an iterator object. We can use the next() method on the iterator to get the next key in the cache. The next() method returns an object with two properties: value (the key) and done (a boolean indicating whether the iterator is done). We can then access the value property to get the key of the least recently used item (the first one added to the Map - note: everytime we use it with the get method, we delete it and add it again, making it added later than the original).
      const lruKeys = this.cache.keys();
      const firstKey = lruKeys.next().value;
      this.cache.delete(firstKey); // Remove the least recently used item from the cache.
    }
  }
}
