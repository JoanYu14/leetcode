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

// 如果k>0的話要取得當前index的後|k|(不包括index本身)個element的總和
// 如果k<0的話要取得當前index的前|k|(不包括index本身)個element的總和
var decrypt = function (code, k) {
  // 取得window size(k的絕對值)
  let size = Math.abs(k);
  // 先宣告start，用作每個window的起始位置(k>0的話起始是window的最左; k<0的話起始是window的最右)
  let start;
  // 取得code的長度，為了之後不用一直用.length增加運算時間
  let len = code.length;
  // 定義ans為空array
  let ans = [];
  if (k === 0) {
    // 如果k為0直接return長度為len，element都為0的array
    return new Array(len).fill(0);
  } else if (k > 0) {
    // 如果k>0的話，start為1 => (當前index(0)的後|k|(不包括index本身)個element的總和)
    // window一開始的起始位置(window的最左)為1，之後會向右滑動，直到滑動len次(start移動到0為止)
    start = 1;
  } else {
    // 如果k<0的話，start為len-1 => (當前index(0)的前|k|(不包括index本身)個element的總和)
    // window一開始的起始位置為len-1(window的最右(因為是前k個所以window是右往左的))，之後會向右滑動，直到滑動len次(start移動到len-2為止)
    start = len - 1;
  }

  // 開始滑動，要滑動len次
  for (let i = 0; i < len; i++) {
    // 先定義此次window的總合為0
    let sum = 0;
    // 開始遍歷window內部的值
    for (let j = 0; j < size; j++) {
      if (k > 0) {
        // 如果k>0的話因為start是最左，所以往右遍歷，index是此次要看的window element的index => start+j (j為這個window的第幾個，從0開始)
        let index = start + j;
        if (index >= len) {
          // window的右邊如果超出範圍的話，會從code這個Array的左邊(index0)往右繼續
          // 所以index會是index-len
          // ex: len = 5, old_index=5超出1, new_index = old_index(5)-len(5) = 0，第一個
          // ex: len = 5, old_index=6超出3, new_index = old_index(6)-len(5) = 1，第二個
          index = index - len;
          console.log(`第${i}-${j}圈的index:${start + j}超出範圍=>${index}`);
        }

        sum += code[index];
      } else if (k < 0) {
        // 如果k<0的話因為start是最右，所以往左遍歷，index是此次要看的window element的index => start-j (j為這個window的第幾個，從0開始)
        let index = start - j;

        if (index < 0) {
          // window的左邊如果小於範圍的話，會從code這個Array的右邊(len-1)往左繼續
          // 所以index會是index-len
          // ex: len = 5, old_index=-1超出左邊1, new_index = old_index(-1)+len(5) = 4，code的倒數第1項
          // ex: len = 5, old_index=-2超出左邊2, new_index = old_index(-2)+len(5) = 3，code的倒數第2項
          index = len + index;
          console.log(`第${i}-${j}圈的index:${start - j}小於範圍=>${index}`);
        }
        sum += code[index];
      }
    }
    ans.push(sum);
    start++;
    if (start >= len) {
      start = 0;
    }
  }
  return ans;
};
console.log(decrypt((code = [5, 7, 1, 4]), (k = 3))); // [12,10,16,13]
console.log(decrypt((code = [1, 2, 3, 4]), (k = 0))); // [ 0, 0, 0, 0 ]
console.log(decrypt((code = [2, 4, 9, 3]), (k = -2))); // [12,5,6,13]
console.log(decrypt([5, 2, 2, 3, 1], 3)); // [7,6,9,8,9]
