// 給定一個大小為 n 的陣列 nums，傳回多數元素。
// 多數元素是出現次數超過⌊n / 2⌋次的元素。您可以假設多數元素始終存在於陣列中。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  let num = Math.floor(nums.length / 2);
  let memo = {};
  for (let i = 0; i < nums.length; i++) {
    if (memo[nums[i]] !== undefined) {
      memo[nums[i]]++;
      if (memo[nums[i]] > num) {
        return nums[i];
      }
    } else {
      memo[nums[i]] = 1;
    }
  }
};
