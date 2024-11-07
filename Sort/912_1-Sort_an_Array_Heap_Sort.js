// 給定一個整數數組 nums，按升序對數組進行排序並傳回它。
// 您必須在不使用任何內建函數的情況下以 O(nlog(n)) 時間複雜度和盡可能最小的空間複雜度解決問題
// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// 使用Heap Sort的解法

// maxHeapify用來將subtree的root node與left right child比較做堆化
// 參數i為subtree的root node index，heapSize為當前heap未排序的element個數
const maxHeapify = function (i, heapSize, nums) {
  // 預設subtree中max value的index為i
  let largest = i;
  // left與right為i的child node
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  if (left <= heapSize - 1 && nums[left] > nums[largest]) {
    // 如果left沒有超出heapSize-1並且nums[left]大於nums[largest]，largest就為left
    largest = left;
  }
  if (right <= heapSize - 1 && nums[right] > nums[largest]) {
    // 如果right沒有超出heapSize-1並且nums[right]大於nums[largest]，largest就為right
    largest = right;
  }
  if (largest != i) {
    // 如果largest不為i的話代表此subtree原本的root node比left node或right node小，所以要做swap往下堆
    let temp = nums[largest];
    nums[largest] = nums[i];
    nums[i] = temp;
    // 交換後largest這個index(left or right的index)的value就被nums[i]取代了，所以要再繼續heapify跟底下的child node做比較，直到往下到正確的位置
    maxHeapify(largest, heapSize, nums);
  }
};

// buildMaxHeap函數是要將初始未排序的Array變成Max Heap
const buildMaxHeap = function (heapSize, nums) {
  // i的初始值為Binary Tree中最後一個subtree(右下角)的root node index
  // 並依序往前做maxHeapify的動作
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(i, heapSize, nums);
  }
};

const heapSort = function (nums) {
  let heapSize = nums.length;

  // 首先呼叫buildMaxHeap將nums由未排序Array變成Max Heap
  buildMaxHeap(heapSize, nums);
  // i的初始值為Max Heap的最後一個index(右下角)，i會一直是Max Heap的最後一個index，因為每次迴圈heap都會縮小1
  for (let i = heapSize - 1; i >= 0; i--) {
    // nums[0]為Max Heap的root node(最大值)，與nums[i](Max Heap的最後一個element)交換
    let temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;
    // 目前Heap中最後一個index就是Heap中最大的value，所以nums的[i]index已排序好
    // 因為目前Heap中的[0]root node index已經不是最大的value了，所以要再做maxheapify使heap為Max Heap讓這個value到合適的位置
    // 但是要排除已排序好的index(目前heap的最後index)，所以heapSize要-1，這樣在做maxHeapify的時候就會忽略已排序好的index了
    heapSize -= 1;
    maxHeapify(0, heapSize, nums);
  }
  return nums;
};

let nums = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1];

// console.log(heapSort([5, 1, 1, 2, 0, 0]));
// console.log(heapSort([5, 2, 3, 1]));
console.log(heapSort(nums));
