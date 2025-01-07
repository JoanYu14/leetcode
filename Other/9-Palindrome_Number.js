// 給定一個整數 x，如果 x 是回文，則傳回 true否則為 false。
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  let left = 0;
  let right = str.length - 1;
  let ans = true;
  while (ans && left < right) {
    if (str[left] !== str[right]) {
      ans = false;
    }
    left++;
    right--;
  }
  return ans;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
