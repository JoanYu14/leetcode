// 給定一個大整數，表示為整數數組digits，其中每個digits[i]是該整數的第i位元。
// 這些數字按從左到右的順序從最高有效位元到最低有效位元排序。大整數不包含任何前導 0。
// 將大整數加一並傳回結果數字數組。
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length;
  // 先找到最後一位數的index
  let lastDigit = len - 1;
  // 如果最後一位數的value小於9的話直接將該位數+1並return digits就好
  if (digits[lastDigit] < 9) {
    digits[lastDigit] += 1;
    return digits;
  } else {
    // 如果最後一位數等於9，並且lastDigit大於等於0的話就繼續while loop
    while (digits[lastDigit] == 9 && lastDigit >= 0) {
      // 將該位數改成0，因為要進位
      digits[lastDigit] = 0;
      // lastDigit往前一位
      lastDigit--;
    }
    // 如果lastDigit為-1代表原始所有位數都是9，進位要多一位數
    if (lastDigit === -1) {
      console.log(`digits[${digits}]的第一項也為9，所以要進位`);
      // 將digits[0]改為1，並且push一個0到最後面
      // 不是直接在最前面加一個1是因為array添加element到頭的位置時間複雜度為O(n)
      // 而改變指定index的值與添加element到array的最後時間複雜度都是O(1)
      digits[0] = 1;
      digits.push(0);
    } else {
      console.log(`等於9的最後一個lastDigit為第${lastDigit}項`);
      digits[lastDigit] += 1;
    }
  }
  return digits;
};
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
