// 如果一個短語在將所有大寫字母轉換為小寫字母並刪除所有非字母數字字元後，向前和向後讀取相同的內容，則該短語是回文。字母數字字元包括字母和數字。
// 給定一個字串 s，如果它是回文則傳回 true，否則傳回 false。

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function (s) {
  // 將非數字字母去掉
  s = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  // left指向第一個字
  let left = 0;
  // right指向最後一個字
  let right = s.length - 1;

  // 如果left<right的話就繼續迴圈(若s為奇數，則中間的字不會檢查)
  while (left < right) {
    // 如果s[left]===s[right]，則左右指針往內移動1index
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      // 若不同的話一定不是回文，直接return false結束函數
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(" "));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("ab_a"));
