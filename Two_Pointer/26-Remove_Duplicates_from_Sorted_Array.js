// 給定一個按非降序排序的整數數組 nums，就地刪除重複項，以便每個唯一元素只出現一次。元素的相對順序應保持相同。然後傳回 nums 中唯一元素的數量。
// 考慮 nums 的唯一元素的數量為 k，要獲得接受，您需要執行以下操作：
// 更改陣列 nums，使 nums 的前 k 個元素按照它們最初在 nums 中出現的順序包含唯一元素。 nums 的其餘元素以及 nums 的大小並不重要。
// 返回 k。

// two pointer
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 先預設i為0, j為1
  let i = 0;
  let j = 1;
  // 如果j小於nums.legnth就繼續迴圈
  while (j < nums.length) {
    // 如果nums[i]===nums[j]的話代表這兩個還是重複的，那j就繼續往後
    if (nums[i] === nums[j]) {
      console.log(`nums[${i}]:${nums[i]} === num[${j}]:${nums[j]}`);
      j++;
    } else {
      // 如果nums[i]!==nums[j]的話，i就+1，然後把nums[i]與nums[j]互換，再將j往後移動繼續比較
      console.log(`nums[${i}]:${nums[i]} !== num[${j}]:${nums[j]}`);
      i = i + 1;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
      console.log(`nums:[${nums}]`);
    }
  }
  return i + 1;
};

removeDuplicates((nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
