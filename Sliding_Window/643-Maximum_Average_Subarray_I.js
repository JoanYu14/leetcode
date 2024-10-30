// 給定一個由 n 個元素組成的整數陣列 nums 和一個整數 k。
// 找到一個長度等於 k 且平均值最大的連續子數組並傳回該值。任何計算誤差小於 10-5 的答案都將被接受。

// O(n)
var findMaxAverage = function (nums, k) {
  let max = 0;

  // 初始加總，計算前 k 個元素的和
  for (let i = 0; i < k; i++) {
    max += nums[i];
  }

  // 設定目前加總為初始加總
  let now_sum = max;

  // 右指針初始化為 k - 1（即子陣列的最後一個元素索引）
  let right = k - 1;
  let start = 0;

  // 開始滑動視窗
  while (start < nums.length - k) {
    right++; // 右指針往右移動一格

    // 更新目前的加總值
    // 新的 now_sum = 當前的加總 + 新增右邊元素 - 移除左邊元素
    now_sum = now_sum + (nums[right] - nums[start]);

    // 如果更新後的 now_sum 大於目前的最大值 max，則更新 max
    if (now_sum > max) {
      max = now_sum;
    }

    // 視窗左邊開始往右移動一格
    start++;
  }

  // 返回最大和的平均值
  return max / k;
};

console.log(findMaxAverage((nums = [1, 12, -5, -6, 50, 3]), (k = 4)));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
