// 斐波那契數（通常表示為 F(n)）形成一個序列，稱為斐波那契數列，其中每個數字都是前兩個數字的總和，從 0 開始，
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 1. 初始化，儲存已經算過的答案與 2.已知的初始值
  let fibMemo = { 0: 0, 1: 1 };
  // 用來計算fibNum
  function getFibAns(n) {
    // 如果要fibMemo[n]為undefined代表還沒計算過
    if (fibMemo[n] !== undefined) {
      return fibMemo[n];
    } else {
      // getFibAns就是getFibAns(n-1)+getFibAns(n-2)，記錄在fibMemo中
      // 3. 狀態轉移公式
      fibMemo[n] = getFibAns(n - 1) + getFibAns(n - 2);
      // 4. 回傳第memo中n.value
      return fibMemo[n];
    }
  }
  return getFibAns(n);
};
