// 給定一個按升序排序的整數數組 nums 和一個整數目標，寫一個函數在 nums 中搜尋目標。如果目標存在，則傳回其索引。否則，返回-1。
// 您必須編寫一個運行時間複雜度為 O(log n) 的演算法。
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
const binarySearch = function (nums, target) {
  // 定義min為nums第一個index
  let min = 0;
  // 定義max為nums最後一個index
  let max = nums.length - 1;

  // 若max>min則繼續迴圈
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    // 如果middle value等於target就找到了，return middle
    if (target === nums[middle]) {
      return middle;
    } else if (target > nums[middle]) {
      // 若target>nums[middle]代表target只可能在middle右邊的element中
      console.log(`target>${nums[middle]}`);
      // min此時就變成middle+1
      min = middle + 1;
      // 新的middle就是(min+max)/2
      middle = Math.floor((min + max) / 2);
      console.log(`新的middle:${middle}, min:${min}, max:${max}`);
    } else if (target < nums[middle]) {
      // 若target>nums[middle]代表target只可能在middle左邊的element中
      max = middle - 1;
      console.log(`target<${nums[middle]}`);
      // 新的middle就是(min+max)/2
      middle = Math.floor((min + max - 1) / 2);
      console.log(`新的middle:${middle}, min:${min}, max:${max}`);
    }
  }

  // while迴圈結束都沒有return代表target不在nums內，所以return -1
  return -1;
};

// console.log(binarySearch((nums = [-1, 0, 3, 5, 9, 12]), (target = 9)));
// console.log(binarySearch((nums = [-1, 0, 3, 5, 9, 12]), (target = 2)));
console.log(binarySearch((nums = [2, 5]), (target = 2)));

// target<5
// 新的middle:0, min:0, max:2
// target>-1
// 新的middle:1, min:1, max:2
// target>0
// 新的middle:2, min:2, max:2
// -1
