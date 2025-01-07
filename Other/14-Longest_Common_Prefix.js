// 編寫一個函數來尋找字串陣列中最長的公共前綴字串。
// 如果沒有公共前綴，則傳回空字串“”。
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 先預設ans為空字串
  let ans = "";
  // pointer代表當前比對第幾個字
  let pointer = 0;
  // 取得strs有幾個字串
  let strCout = strs.length;
  // 預設same為true
  let same = true;
  // 如果same為true就繼續while迴圈
  while (same) {
    // 因為每次都會用當前的去比對後一個，所以for loop到strCount-1就好
    for (let i = 0; i < strCout - 1; i++) {
      console.log(
        `strs[i][pointer] : ${strs[i][pointer]} ; strs[i + 1][pointer] : ${
          strs[i + 1][pointer]
        }`
      );
      // 如果兩個字串的第pointer個字不同 or 其中一個字串的pointer個字不存在，就將same改為false並跳出for loop
      if (
        strs[i][pointer] !== strs[i + 1][pointer] ||
        strs[i][pointer] === undefined ||
        strs[i + 1][pointer] === undefined
      ) {
        console.log(`兩者不一樣`);
        same = false;
        break;
      }
    }
    // 如果same為true並且strs[0]的第pointer個字不是undefined的話就將ans加上該字，pointer往後移一格並且繼續while loop
    if (same && strs[0][pointer] !== undefined) {
      ans = ans + strs[0][pointer];
      console.log(`都一樣，所以繼續，當前ans: ${ans}`);
      pointer++;
    } else {
      same = false;
    }
  }
  // 最後return ans
  return ans;
};
// console.log(longestCommonPrefix((strs = ["flower", "flow", "flight"])));
console.log(longestCommonPrefix((strs = [""])));
