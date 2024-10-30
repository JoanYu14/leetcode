// 給定一個正整數 nums 陣列和一個正整數 target，傳回 a 的最小長度子數組
// 其總和大於或等於目標。如果不存在這樣的子數組，則傳回 0。

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// 由於每個元素在 left 和 right pointer都僅被訪問一次，因此時間複雜度為 O(n)
var minSubArrayLen = function (target, nums) {
  // 用兩個pointer都指向index0
  let left = 0;
  let right = 0;
  // 先定義ans為0
  let ans = 0;
  let sum = 0;
  // 定義do_plus來記錄迴圈要做加還是減
  let do_plus = true;
  while (right < nums.length) {
    if (do_plus) {
      // 如果do_plus為true，代表上個迴圈的sum<target，所以right++
      // 在這次迴圈要加上right
      sum += nums[right];
    } else {
      // 如果do_plus為false，代表上個迴圈的sum>=target
      // 所以要先減掉left然後left++，另window變小，再去檢查新的sum是否有>=target
      sum -= nums[left];
      left++;
    }

    // 檢查sum是否>target
    if (sum >= target) {
      let subarray_count = right + 1 - left;
      // 如果ans為0代表此前沒找到window>=target的
      // subarray_count < ans代表這個window加總sum既>=target又比之前找到的符合sum>=target的window個數少
      if (ans == 0 || subarray_count < ans) {
        ans = subarray_count;
      }
      // 另da_plus=false，代表下次迴圈要把左邊界(left)減掉，另window縮小，在檢查sum是否仍然>=target
      do_plus = false;
    } else {
      // 另do_plus=true，然後right++，代表下次迴圈要加上nums[right]，將window擴大
      do_plus = true;
      right++;
    }
  }
  return ans;
};
console.log(minSubArrayLen((target = 7), (nums = [2, 3, 1, 2, 4, 3])));
console.log(minSubArrayLen((target = 4), (nums = [1, 4, 4])));
console.log(minSubArrayLen((target = 11), (nums = [1, 1, 1, 1, 1, 1, 1, 1])));
