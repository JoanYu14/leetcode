/*
給定一個整數陣列nums，如果任何值在陣列中至少出現兩次，則返回true，如果每個元素都不同，則返回false。

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let memo = {};
  let left = 0;
  let right = nums.length - 1;
  let ans = false;
  while (left <= right && !ans) {
    if (memo[nums[left]] !== undefined) {
      ans = true;
      break;
    } else {
      memo[nums[left]] = 1;
    }

    if (memo[nums[right]] !== undefined && left !== right) {
      ans = true;
      break;
    } else {
      memo[nums[right]] = 1;
    }
    left++;
    right--;
  }
  return ans;
};
console.log(containsDuplicate((nums = [1, 2, 3, 1])));
console.log(containsDuplicate((nums = [1, 2, 3, 4])));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1]));
