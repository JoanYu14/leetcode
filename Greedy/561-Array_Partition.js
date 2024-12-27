// 給定一個包含2n 個整數的整數數組nums，將這些整數分為n 對(a1, b1), (a2, b2), ..., (an, bn)，使得所有i 的min(ai, bi ) 之和被最大化。返回最大總和。
// Example 1:
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Example 2:
// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxHeapify = function (nums, heapSize, index) {
  let left = index * 2 + 1;
  let right = index * 2 + 2;
  let largest = index;
  if (left < heapSize && nums[left] > nums[largest]) {
    largest = left;
  }
  if (right < heapSize && nums[right] > nums[largest]) {
    largest = right;
  }
  if (largest !== index) {
    let temp = nums[largest];
    nums[largest] = nums[index];
    nums[index] = temp;
    maxHeapify(nums, heapSize, largest);
  }
};

const buildMaxHeap = function (nums, heapSize) {
  let firstRootIndex = Math.floor(nums.length / 2) - 1;
  for (let index = firstRootIndex; index >= 0; index--) {
    maxHeapify(nums, heapSize, index);
  }
};

const heapSort = function (nums) {
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);
  for (let i = nums.length - 1; i >= 0; i--) {
    let temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;
    heapSize--;
    maxHeapify(nums, heapSize, 0);
  }
};

const partition = function (nums, startIndex, endIndex) {
  let pivotIndex = endIndex;
  let smallThanPivotArrEndIndex = startIndex - 1;
  for (let i = startIndex; i < endIndex; i++) {
    if (nums[pivotIndex] > nums[i]) {
      smallThanPivotArrEndIndex++;
      let temp = nums[smallThanPivotArrEndIndex];
      nums[smallThanPivotArrEndIndex] = nums[i];
      nums[i] = temp;
    }
  }
  let pivotInsertIndex = smallThanPivotArrEndIndex + 1;
  let temp = nums[pivotIndex];
  nums[pivotIndex] = nums[pivotInsertIndex];
  nums[pivotInsertIndex] = temp;
  return pivotInsertIndex;
};

const quickSort = function (nums, str, end) {
  if (end > str) {
    const sortedIndex = partition(nums, str, end);
    quickSort(nums, str, sortedIndex - 1);
    quickSort(nums, sortedIndex + 1, end);
  }
  return nums;
};

var arrayPairSum = function (nums) {
  // 將nums用heapSort排序
  //   heapSort(nums);
  // 將nums用quickSort排序(在leetcode中用quickSort的成績會較好)
  // 排序的意義是為了避免pair是nums中的 (min,max) or 較小的配較大的，這樣的話就會浪費較大的那個value
  // 排序後就確保pair是大的配大的，能每次都選到第二大的value
  quickSort(nums, 0, nums.length - 1);

  // 先預設sum為0
  let sum = 0;
  // 設i起始為0，每次都+2，如果i小於nums.length則繼續迴圈
  // i起始為0每次加2是因為nums已經排序過，兩兩分組的話min一定是前面那個index，所以每次+2，nums[i]就是pair裡較小的value
  for (let i = 0; i < nums.length; i += 2) {
    console.log(`index:${i},value:${nums[i]}`);
    // sum加上pair中較小的那個
    sum += Math.min(nums[i]);
  }
  return sum;
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
console.log(arrayPairSum([1, 4, 3, 2]));
