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
const fib = function (n) {
  if (n === 0) {
    return 0;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(fib(4));
