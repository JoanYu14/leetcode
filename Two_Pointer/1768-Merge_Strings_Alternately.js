// 給定兩個字串 word1 和 word2。透過以交替順序添加字母來合併字串，從 word1 開始。如果一個字串比另一個字串長，請將附加字母附加到合併字串的末尾。
// 傳回合併後的字串。
// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// 這就是mergeSort的merge function
var mergeAlternately = function (word1, word2) {
  // left, right pointer分別指向word1與word2
  let left = 0;
  let right = 0;
  let result = "";
  while (left < word1.length && right < word2.length) {
    result = result + word1[left] + word2[right];
    left++;
    right++;
  }
  while (left < word1.length) {
    result = result + word1[left];
    left++;
  }

  while (right < word2.length) {
    result = result + word2[right];
    right++;
  }
  return result;
};
