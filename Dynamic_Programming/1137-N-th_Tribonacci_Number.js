// Tribonacci 序列 Tn 定義如下：
// T0 = 0、T1 = 1、T2 = 1，且 Tn+3 = Tn + Tn+1 + Tn+2（當 n >= 0 時）。
// 給定 n，傳回 Tn 的值。
// Example 1:
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Example 2:
// Input: n = 25
// Output: 1389537

/*
1. 狀態函數: f(n) = value
2. 初始狀態: f(0)=0, f(1)=1, f(2)=1
3. 狀態轉移公式: f(n) = f(n-1) + f(n-2) + f(n-3)
*/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const memo = { 0: 0, 1: 1, 2: 1 };
  const getValue = function (memo, num) {
    if (memo[num] !== undefined) {
      return memo[num];
    } else {
      memo[num] =
        getValue(memo, num - 1) +
        getValue(memo, num - 2) +
        getValue(memo, num - 3);
      return memo[num];
    }
  };
  return getValue(memo, n);
};
console.log(tribonacci(25));
