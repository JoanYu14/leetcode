// 給定一個整數數組 nums，將所有 0 移至其末尾，同時保持非零元素的相對順序。
// 請注意，您必須就地執行此操作，而不複製數組。
// Example 1:
// Input: nums = [0,1,0,3,12]
/*
1,0,0,3,12 right++ => right = 2
1,0,0,3,12 right++ => right = 3
1,3,0,0,12 right++ => right = 4
1,3,12,0,0 right++ => right = 5
*/
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]
var moveZeroes = function (nums) {
  // left紀錄如果right的value不等於0要前進到哪個index
  let left = 0;
  // right用來遍歷nums所有element，若right value等於0的話就不會往前換
  let right = 0;
  while (right < nums.length) {
    console.log(nums[right]);
    if (nums[right] != 0) {
      // 如果nums[right]等於0的話就換到left的位置
      let swap = nums[left];
      nums[left] = nums[right];
      nums[right] = swap;
      // left+1，就是下次不為0的element要換到的index
      left++;
    }
    right++;
  }
  return nums;
};

// var moveZeroes = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     if (nums[left] === 0) {
//       //   console.log(`${left}為0`);
//       nums.splice(left, 1);
//       nums.push(0);
//       left--;
//       right--;
//     }
//     left++;
//   }
//   return nums;
// };

console.log(moveZeroes([0, 1, 0, 3, 12]));
