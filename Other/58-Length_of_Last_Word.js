// 給定一個由單字和空格組成的字串 s，傳回字串中最後一個單字的長度。
// 一個字就是一個最大子字串，僅由非空格字元組成。
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 先將s按照" "分割，並篩選出不為""的element
  let splitArr = s.split(" ").filter((word) => word !== "");
  // 回傳陣列中最後一個element的長度
  return splitArr[splitArr.length - 1].length;
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
