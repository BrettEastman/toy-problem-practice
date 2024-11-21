// Leetcode: 1366. Rank Teams by Votes
// URL: https://leetcode.com/problems/rank-teams-by-votes/
// Difficulty: Medium
//
// In a special ranking system, each voter gives a rank from highest to lowest to all teams participating in the competition.

// The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.

// You are given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above.

// Return a string of all teams sorted by the ranking system.

// Example 1:
// Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
// Output: "ACB"
// Explanation:
// Team A was ranked first place by 5 voters. No other team was voted as first place, so team A is the first team.
// Team B was ranked second by 2 voters and ranked third by 3 voters.
// Team C was ranked second by 3 voters and ranked third by 2 voters.
// As most of the voters ranked C second, team C is the second team, and team B is the third.

// Example 2:
// Input: votes = ["WXYZ","XYZW"]
// Output: "XWYZ"
// Explanation:
// X is the winner due to the tie-breaking rule. X has the same votes as W for the first position, but X has one vote in the second position, while W does not have any votes in the second position.

// Example 3:
// Input: votes = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]
// Output: "ZMNAGUEDSJYLBOPHRQICWFXTVK"
// Explanation: Only one voter, so their votes are used for the ranking.

// Partly my solution, partly copilot's:
/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  // If there's only one vote or no votes, return the single vote or an empty string.
  if (!votes || votes.length === 0) return "";
  if (votes.length === 1) return votes[0];

  const numOfCandidates = votes[0].length; // Number of teams participating.
  const candidateMap = new Map(); // Map to store each team's vote counts per position.

  // Initialize the candidateMap with all unique teams and their vote counts.
  for (let voter of votes) {
    for (let i = 0; i < voter.length; i++) {
      let candidate = voter[i];
      if (!candidateMap.has(candidate)) {
        // Initialize an array to count votes for each position.
        candidateMap.set(candidate, new Array(numOfCandidates).fill(0));
      }
      // Increment the vote count for the team at the current position.
      candidateMap.get(candidate)[i]++;
    }
  }

  // Convert the map to an array for sorting. Each element is [team, [vote counts]].
  let candidateArr = Array.from(candidateMap);

  // Sort the candidateArr based on the number of votes at each position.
  candidateArr.sort((a, b) => {
    // Iterate through each voting position from first to last.
    for (let i = 0; i < numOfCandidates; i++) {
      // If the vote counts differ at the current position, decide the order based on that.
      if (a[1][i] !== b[1][i]) {
        // Sort in descending order of votes for the current position.
        return b[1][i] - a[1][i];
      }
    }
    // If all vote counts are identical across all positions, sort alphabetically.
    return a[0].localeCompare(b[0]);
  });

  // Extract the sorted team names and join them into a single string.
  return candidateArr.map((a) => a[0]).join("");
};

// Tests
console.log(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"])); // Output: "ACB"
console.log(rankTeams(["WXYZ", "XYZW"])); // Output: "XWYZ"
console.log(rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"])); // Output: "ZMNAGUEDSJYLBOPHRQICWFXTVK"
console.log(rankTeams([])); // Output: ""
console.log(rankTeams(["A"])); // Output: "A"
