// 給定一個整數數組 nums 和一個整數 target，傳回兩個數字的索引，使它們相加等於 target。
// 您可以假設每個輸入都有一個解決方案，並且您不能兩次使用相同的元素。
// 您可以按任意順序返回答案。

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Hash Table
// key為integerValue, value為index
var twoSum = function (nums, target) {
  let counter = {};
  for (let i = 0; i < nums.length; i++) {
    let shouldFindNum = target - nums[i];
    let result = counter[shouldFindNum];
    // console.log(`要找到數字為:${shouldFindNum}，result為:${result}`);
    if (result != undefined) {
      return [i, result];
    } else {
      counter[nums[i]] = i;
    }
  }
};
console.log(twoSum((nums = [3, 2, 4]), (target = 6)));
console.log(twoSum((nums = [3, 3]), (target = 6)));
console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum([0, 4, 3, 0], 0));
