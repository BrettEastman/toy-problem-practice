// Leetcode: #277
// Difficulty: Medium
// Topic: Array, Two Pointers
// Company: Facebook, LinkedIn

// Suppose you are at a party with n people labeled from 0 to n - 1 and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know the celebrity, but the celebrity does not know any of them.
// Now you want to find out who the celebrity is or verify that there is not one. You are only allowed to ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).
// You are given an integer n and a helper function bool knows(a, b) that tells you whether a knows b. Implement a function int findCelebrity(n). There will be exactly one celebrity if they are at the party.
// Return the celebrity's label if there is a celebrity at the party. If there is no celebrity, return -1.
// Note that the n x n 2D array graph given as input is not directly available to you, and instead only accessible through the helper function knows. graph[i][j] == 1 represents person i knows person j, wherease graph[i][j] == 0 represents person j does not know person i.

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let candidate = 0;

    // Find the candidate
    // If the current candidate knows person i, then the candidate cannot be the celebrity (since a celebrity does not know anyone). Therefore, update the candidate to person i.
    for (let i = 1; i < n; i++) {
      if (knows(candidate, i)) {
        candidate = i;
      }
    }
    // By the end of this loop, the candidate will be the person who does not know anyone after them. This is a potential celebrity.

    // Verify the candidate
    // The second loop verifies whether the candidate is indeed a celebrity.
    // It checks two conditions for each person i:
    // The candidate should not know person i (!knows(candidate, i)).
    // Person i should know the candidate (knows(i, candidate)).
    // If either condition fails for any person i, the candidate is not a celebrity, and the function returns -1.
    for (let i = 0; i < n; i++) {
      if (i !== candidate && (knows(candidate, i) || !knows(i, candidate))) {
        return -1;
      }
    }

    return candidate;
  };
};
