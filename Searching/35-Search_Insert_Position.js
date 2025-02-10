/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 先找出middle
  let middle = Math.floor(nums.length / 2);
  // 如果nums[middle]與target相同的話直接return middle就好
  if (nums[middle] === target) {
    return middle;
  }
  // 如果nums[middle]比target"小" => i一定inset到nums的右半部
  if (nums[middle] < target) {
    for (let i = middle + 1; i < nums.length; i++) {
      // 從middle+1開始比，如果nums[i]>=target代表target要insert到i，原本的i會往後移
      if (nums[i] >= target) {
        return i;
      }
    }
    // 如果迴圈結束都沒有return代表target要insert到最後面
    return nums.length;
  } else {
    for (let i = 0; i < middle; i++) {
      // 如果nums[middle]比target"大" => i一定insert到nums的左半部
      if (nums[i] >= target) {
        // 從middle+1開始比，如果nums[i]>=target代表target要insert到i，原本的i會往後移
        return i;
      }
    }
    // 如果迴圈結束都沒有return代表target要insert到middle的位置，原本的middle會往後移
    return middle;
  }
};
