// 寫一個演算法來確定數字 n 是否滿意。
// 快樂數字是透過以下過程定義的數字：
// 從任意正整數開始，用其數字的平方和替換該數字。
// 重複該過程直到數字等於 1（它將保持在該位置），或者它會在不包括 1 的循環中無限循環。
// 對於該過程以 1 結尾的數字來說，這些數字是令人滿意的。
// 如果 n 是快樂數字，則傳回 true，否則傳回 false。
// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Example 2:
// Input: n = 2
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 先將n轉為string
  let str = n.toString();

  // memo用來記錄當前sum是否計算過了
  let memo = {};
  while (true) {
    // 每次迴圈sum歸零
    let sum = 0;
    // left與right分別指向開頭與最後
    let left = 0;
    let right = str.length - 1;

    // 如果right>=left就繼續迴圈
    while (right >= left) {
      // 如果right==left的話代表是中間點，那sum就加上其中一個的平方就好
      if (right === left) {
        sum = sum + str[left] ** 2;
      } else {
        // sum加上left與right的平方
        sum = sum + str[left] ** 2 + str[right] ** 2;
      }
      // right往前移,left往後移
      right--;
      left++;
    }
    if (sum === 1) {
      // 如果sum為1的話就return true
      return true;
    } else {
      // 否則如果memo[sum]已經出現過了，代表已經變成循環了，就直接return false
      if (memo[sum] === true) {
        return false;
      } else {
        // 不然就將memo[sum]設為true
        memo[sum] = true;
      }
    }

    // str改成sum的字串並繼續迴圈
    str = sum.toString();
  }
};
