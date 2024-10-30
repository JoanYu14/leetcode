// 給定一個整數數組 nums 和一個整數 val，就地刪除 nums 中所有出現的 val。元素的順序可以改變。然後傳回nums中不等於val的元素個數。
// 考慮 nums 中不等於 val 的元素數量為 k，要被接受，您需要執行以下操作：
// 更改陣列 nums，使 nums 的前 k 個元素包含不等於 val 的元素。 nums 的其餘元素以及 nums 的大小並不重要。
// 返回 k。
/*
right 3 left 3
[3,2,2,3] => .pop() => [3,2,2] , right-1=2,  left-1=2
[3,2,2] => check 2(left), => left -1 =1 
[3,2,2] => check 1(left), => left -1 = 0
[3,2,2] = > check 3(left) => left right cheange => [2,2,3].pop() => [2,2] left-- right--
*/

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// left紀錄當前檢查到哪
// right紀錄目前nums的最後一個index
// 由右往左檢查
// 當前nums[left] === val的話就left right change後.pop()刪除最後一項，.pop的big O為O(1)，left-1, right-1(因為刪除了一項)
// 當前nums[left] != val的話left就-1
var removeElement = function (nums, val) {
  let left = nums.length - 1;
  let right = nums.length - 1;
  while (left >= 0) {
    // 左右交換後刪除最後一項
    if (nums[left] === val) {
      temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      nums.pop();
      left--;
      right--;
    } else {
      left--;
    }
  }
  return right + 1;
  //   return { nums, count: right + 1 };
};
console.log(removeElement([], 2));
// const arr = [1, 2, 3, 4];
// arr[2] = arr[1];
// console.log(arr);
