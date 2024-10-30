// 給定一個按非降序排序的整數數組 nums，就地刪除重複項，以便每個唯一元素只出現一次。元素的相對順序應保持相同。然後傳回 nums 中唯一元素的數量。
// 考慮 nums 的唯一元素的數量為 k，要獲得接受，您需要執行以下操作：
// 更改陣列 nums，使 nums 的前 k 個元素按照它們最初在 nums 中出現的順序包含唯一元素。 nums 的其餘元素以及 nums 的大小並不重要。
// 返回 k。

// two pointer
var removeDuplicates = function (nums) {
  let left = 0;
  let right = 1;
  let arr_length = nums.length;
  while (right < arr_length) {
    if (nums[left] != nums[right]) {
      left++;
      right++;
    } else {
      //   console.log(nums[right]);
      nums.splice(right, 1);
      //   console.log(nums);
      arr_length--;
    }
  }
  return { ans: nums.length, nums };
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
[0, 1, 1, 1, 1, 2, 2, 3, 3, 4];

console.log("=================");

var removeDuplicatesNot = function (nums) {
  let j = i + 1;
  let remove_count = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) {
      remove_count++;
      while (nums[j] === nums[i] || j < nums.length) {
        remove_count++;
        j++;
      }
    }
  }
};
