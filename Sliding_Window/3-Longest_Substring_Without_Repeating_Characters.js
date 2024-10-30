// 給定一個字串s，求最長的長度子字串，沒有重複字元。
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// 我打算用sliding window的方式
// 從right開始，如果counter中s[right]為falsy(0 or undefined)的話就另counter[s[right]]為1，代表目前的window內此字母已存在，right++
// counter中s[right]為truthy，代表目前的window內此字母已存在，counter[s[left]]-=1，把s[left]從counter中-1，代表目前的window內此字母已刪除，left++

// O(n)
var lengthOfLongestSubstring = function (s) {
  // 右pointer指向要加入window的index
  let right = 0;
  // 左pointer指向目前window的起始位置
  let left = 0;
  // 紀錄最大無重複字母的字串長度
  let ans = 0;
  // 紀錄window內存在的字母
  let counter = {};

  while (right < s.length) {
    // step1 : 檢查s[right]在counter中是否已存在
    if (!counter[s[right]]) {
      // 不存在的話(0也是falsy value)，就將s[right]加入window，並且在counter中記錄
      counter[s[right]] = 1;
      // 如果當前window內element數量>ans的話就更新ans
      if (right - left + 1 > ans) {
        ans = right - left + 1;
      }
      // right++，下一圈繼續往右檢查看是否不重複
      right++;
    } else {
      // truthy代表目前window中存在s[right]這個字母
      // => 將window縮小，先將counter[s[left]]-=1，然後left往右
      counter[s[left]] -= 1;
      left++;
    }
  }
  return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
