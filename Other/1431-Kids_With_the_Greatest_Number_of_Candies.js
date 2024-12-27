// 有 n 個拿著糖果的孩子。給你一個整數數組 candies，其中每個 candies[i] 代表第 i 個孩子擁有的糖果數量，以及一個整數 extraCandies，表示你擁有的額外糖果數量。
// 傳回一個長度為 n 的布林數組結果，其中，如果在給第 i 個孩子所有額外糖果後，他們將擁有所有孩子中最多的糖果，則 result[i] 為 true，否則為 false。
// 請注意，多個孩子可以擁有最多數量的糖果。
// Example 1:
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// Example 2:
// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

// Example 3:
// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // 先找到candies裡面最大的 => 原本所有小孩中糖果最多的
  let max = Math.max(...candies);
  // 定義result為空陣列
  let reulst = [];
  // 開始遍歷candies => 看每個小孩的糖果數 + 我手中我有的糖果 後這個小孩是否會是所有小孩中擁有最多糖果的
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      reulst.push(true);
    } else {
      reulst.push(false);
    }
  }
  return reulst;
};
console.log(kidsWithCandies((candies = [4, 2, 1, 1, 2]), (extraCandies = 1)));
