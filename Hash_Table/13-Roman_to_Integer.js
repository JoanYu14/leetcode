// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 羅馬數字通常從左到右從最大到最小書寫。然而，四的數字不是 IIII。相反，數字四寫作 IV。因為一在五之前，所以我們減去它，得到四。同樣的原則也適用於數字九，寫成IX。有六種使用減法的情況：

// I 可以放在 V (5) 和 X (10) 之前，得到 4 和 9。
// X 可以放在 L (50) 和 C (100) 之前，以獲得 40 和 90。
// C可以放在D（500）和M（1000）之前，以獲得400和900。
// 給定一個羅馬數字，將其轉換為整數。
// Example 1:
// Input: s = "III"
// Output: 3

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const memo = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let num = 0;
  let i = 0;
  while (i < s.length) {
    let currentWord = s[i];
    // 如果currentWord為I or X or V 並且 i<s的長度-2 並且 memo[currentWord + s[i + 1]]不為undefined
    // 代表currentWord可以跟後面那個字組成一個羅馬數字
    if (
      (currentWord === "I" || currentWord === "X" || currentWord === "C") &&
      i < s.length - 1 &&
      memo[currentWord + s[i + 1]] !== undefined
    ) {
      num += memo[currentWord + s[i + 1]];
      i += 2;
    } else {
      num += memo[currentWord];
      i += 1;
    }
  }
  return num;
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
