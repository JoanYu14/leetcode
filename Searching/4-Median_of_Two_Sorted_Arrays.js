// 給定兩個大小分別為 m 和 n 的排序數組 nums1 和 nums2，傳回這兩個排序數組的中位數。
// 總體運行時間複雜度應為 O(log (m+n))。
// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
var findMedianSortedArrays = function (nums1, nums2) {
  // 使用mergeSort中merge的函數來將兩個sortedArray做合併
  let result = [];
  let left = 0;
  let right = 0;
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      result.push(nums1[left]);
      left++;
    } else {
      result.push(nums2[right]);
      right++;
    }
  }
  while (left < nums1.length) {
    result.push(nums1[left]);
    left++;
  }

  while (right < nums2.length) {
    result.push(nums2[right]);
    right++;
  }

  // 先找到middle
  let middle = Math.floor(result.length / 2);
  console.log(`middle:${middle}`);
  console.log(`result:[${result}]`);
  let ans;
  // 如果reuslt的長度除以2的餘數是0的話就要將middle與middle-1的value相加除以2才是median
  if (result.length % 2 === 0) {
    console.log(
      `result[middle]:${result[middle]},result[middle-1]${result[middle - 1]}`
    );
    ans = (result[middle] + result[middle - 1]) / 2;
  } else {
    ans = result[middle];
  }

  return ans;
};

console.log(findMedianSortedArrays((nums1 = [1, 3]), (nums2 = [2])));
console.log(findMedianSortedArrays((nums1 = [1, 2]), (nums2 = [3, 4])));
console.log(findMedianSortedArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]));

var findMedianSortedArrays2 = function (nums1, nums2) {
  // 使用mergeSort中merge的函數來將兩個sortedArray做合併
  let result = [];
  let left = 0;
  let right = 0;
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      result.push(nums1[left]);
      left++;
    } else {
      result.push(nums2[right]);
      right++;
    }
  }
  while (left < nums1.length) {
    result.push(nums1[left]);
    left++;
  }

  while (right < nums2.length) {
    result.push(nums2[right]);
    right++;
  }

  // 先找到middle
  let middle = Math.floor(result.length / 2);
  console.log(`middle:${middle}`);
  console.log(`result:[${result}]`);
  let ans;
  // 如果reuslt的長度除以2的餘數是0的話就要將middle與middle-1的value相加除以2才是median
  if (result.length % 2 === 0) {
    console.log(
      `result[middle]:${result[middle]},result[middle-1]${result[middle - 1]}`
    );
    ans = (result[middle] + result[middle - 1]) / 2;
  } else {
    ans = result[middle];
  }

  return ans;
};
