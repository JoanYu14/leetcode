// 給定兩個字串 s 和 t，如果 s 是 t 的子序列，則傳回 true，否則傳回 false。
// 字串的子序列是透過刪除原始字串中的一些（可以沒有）字元而形成的新字串，而不影響其餘字元的相對位置。 （即“ace”是“abcde”的子序列，而“aec”不是）。
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
var isSubsequence = function (s, t) {
  // 若s的長度為0代表是空字串， s 一定是 t 的子序列
  if (s.length === 0) {
    return true;
  }
  // left指向s的index
  let left = 0;
  // right指向t的index
  let right = 0;
  // 若right還在t的範圍內就繼續迴圈
  while (right < t.length) {
    if (t[right] === s[left]) {
      // 若t[right]等於s[left]則left
      // 代表s[left]在t中存在，left++
      left++;
      // 若是left+1後等於s的長度的話代表 s 是 t 的子序列
      if (left === s.length) {
        return true;
      }
    }
    // 不管如何right都要+1
    right++;
  }
  // 若while迴圈結束都沒有return true結束函數代表 s 不是 t 的子序列
  return false;
};
console.log(isSubsequence((s = "abc"), (t = "ahbgdc")));
console.log(isSubsequence((s = "axc"), (t = "ahbgdc")));
console.log(isSubsequence("", "ahbgdc"));
