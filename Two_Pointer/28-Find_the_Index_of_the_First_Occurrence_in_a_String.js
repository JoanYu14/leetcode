// 給定兩個字串needle和haystack，傳回needle在haystack中第一次出現的索引。
// 如果needle不是haystack的一部分，則傳回-1。

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

var strStr = function (haystack, needle) {
  let left = -1;
  let right = 0;
  let window_size = needle.length;
  // 如果left小於haystack.length - needle.length(最後有可能的開始index)
  while (left < haystack.length - window_size) {
    // left往後一格
    left++;

    // 開始檢查haystack往後加上window_size之間的element與needle所要的是否對的上
    for (let i = 0; i < window_size; i++) {
      // 如果對應上了
      if (haystack[left + i] === needle[right + i]) {
        console.log("----------");
        console.log("一樣");
        console.log(
          `left:{index:${left},當前index:${left + i},str:${
            haystack[left]
          }}; right:{index:${right + i},str:${needle[right + i]}}`
        );
        // 如果right===window_size-1代表已經確認玩needle都符合
        if (right + i === window_size - 1) {
          // return left(這個window的開始index)
          return left;
        }
        // 若還沒對應玩needle的話right就++
        // right++;
      } else {
        console.log("===========");
        console.log("不一樣");
        console.log(
          `left:{index:${left},當前index:${left + i},str:${
            haystack[left]
          }}; right:{index:${right + i},str:${needle[right + i]}}`
        );
        // 若對應不上的話結束for迴圈(結束這個window的檢查)
        // right = 0;
        break;
      }
    }
  }
  return -1;
};

// left指向haystack的索引
// right指向needle的索引
// 若是left與right的值不同的話，right=0，left++
// 若是相同的話，right++，left++
// var strStr = function (haystack, needle) {
//   let left = 0;
//   let right = 0;
//   while (left < haystack.length) {
//     if (haystack[left] === needle[right]) {
//       console.log("一樣");
//       console.log(
//         `left:{index:${left},str:${haystack[left]}}; right:{index:${right},str:${needle[right]}}`
//       );
//       if (right === needle.length - 1) {
//         // haystack符合的開始index
//         return left - right;
//       }
//       right++;
//       left++;
//     } else {
//       console.log("不一樣");
//       console.log(
//         `left:{index:${left},str:${haystack[left]}}; right:{index:${right},str:${needle[right]}}`
//       );
//       left++;
//       right = 0;
//     }
//   }
//   return -1;
// };
// console.log(strStr((haystack = "sadbutsad"), (needle = "sad")));
// console.log(strStr((haystack = "leetcode"), (needle = "leeto")));
console.log(strStr("mississippi", "issip"));
