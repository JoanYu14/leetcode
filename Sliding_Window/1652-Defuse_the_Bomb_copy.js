// 你有一顆炸彈需要拆除，而你的時間已經不多了！你的告密者將為你提供一個長度為 n 的循環數組代碼和一個密鑰 k。
// 要解密代碼，您必須替換每個數字。所有數字同時被替換。
// 如果 k > 0，則將第 i 個數字替換為接下來的 k 個數字的總和。
// 如果 k < 0，則將第 i 個數字替換為前 k 個數字的總和。
// 如果 k == 0，則將第 i 個數字替換為 0。
// 由於code是循環的，code[n-1]的下一個元素是code[0]，code[0]的前一個元素是code[n-1]。
// 給定循環數組代碼和整數密鑰 k，返回解密的代碼以拆除炸彈！

// Example 1:

// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
// Example 2:

// Input: code = [1,2,3,4], k = 0
// Output: [0,0,0,0]
// Explanation: When k is zero, the numbers are replaced by 0.
// Example 3:

// Input: code = [2,4,9,3], k = -2
// Output: [12,5,6,13]
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.
var decrypt = function (code, k) {
  let size = Math.abs(k);
  let start;
  let ans = [];
  if (k === 0) {
    ans = new Array(code.length).fill(0);
    return ans;
  } else if (k > 0) {
    start = 1;
  } else {
    start = code.length - 1;
  }

  for (let i = 0; i < code.length; i++) {
    let sum = 0;
    for (let j = 0; j < size; j++) {
      if (k > 0) {
        let index = start + j;
        if (index >= code.length) {
          index = index - code.length;
          //   index = code.length - 1 - j - 1;
          console.log(`第${i}-${j}圈的index:${start + j}超出範圍=>${index}`);
        }

        sum += code[index];
      } else if (k < 0) {
        console.log(start);
        let index = start - j;
        console.log(`第${i}-${j}圈的index:${index}`);
        if (index < 0) {
          index = code.length + index;
          console.log(`第${i}-${j}圈的index:${start + j}小於範圍=>${index}`);
        }
        sum += code[index];
      }
    }
    ans.push(sum);
    start++;
    if (start >= code.length) {
      start = 0;
    }
  }
  return ans;
};
// console.log(decrypt((code = [5, 7, 1, 4]), (k = 3))); // [12,10,16,13]
// console.log(decrypt((code = [1, 2, 3, 4]), (k = 0)));
console.log(decrypt((code = [2, 4, 9, 3]), (k = -2))); // [12,5,6,13]
// console.log(decrypt([5, 2, 2, 3, 1], 3)); // [7,6,9,8,9]
