// 215. Kth Largest Element in an Array
// 給定一個整數數組 nums 和一個整數 k，傳回數組中第 k 個最大的元素。
// 請注意，它是排序順序中的第 k 個最大元素，而不是第 k 個不同元素。
// 不排序能解決嗎？
// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

const minHeapify = function (nums, heapSize, rootNodeIndex) {
  // 找到此rootNode的left與right node
  const left = rootNodeIndex * 2 + 1;
  const right = rootNodeIndex * 2 + 2;
  // 預設smallest為rootNodeIndex
  let smallest = rootNodeIndex;
  if (left < heapSize && nums[left] < nums[smallest]) {
    smallest = left;
  }
  if (right < heapSize && nums[right] < nums[smallest]) {
    smallest = right;
  }

  if (smallest != rootNodeIndex) {
    // 如果smallest與rootNodeIndex不同，代表left or right比rootValue小，那就要交換，讓root為subTree中最小的
    let temp = nums[smallest];
    nums[smallest] = nums[rootNodeIndex];
    nums[rootNodeIndex] = temp;
    // 因為smallest此時已經不是原來的值了，所以要對它做minHeapify與它的left right比較，確保它在正確的位置
    minHeapify(nums, heapSize, smallest);
  }
};

// 此函數用來將初始未做heapify的Array變成minHeap，只會呼叫一次
const buildMinHeap = function (nums, heapSize) {
  // 找到最右下角subTree的rootNode，依此往前做minHeapify
  let firstRootNode = Math.floor(nums.length / 2) - 1;
  for (let i = firstRootNode; i >= 0; i--) {
    minHeapify(nums, heapSize, i);
  }
};

const heapSortDesc = function (nums) {
  let heapSize = nums.length;
  buildMinHeap(nums, heapSize);
  for (let sortedIndex = heapSize - 1; sortedIndex >= 0; sortedIndex--) {
    // 做好minHeap後index0(root)的value就是整個heap中最小的value
    // 將root與sortedIndex的value互換可以就可以依序找到當前heap中最小的value
    let temp = nums[sortedIndex];
    nums[sortedIndex] = nums[0];
    nums[0] = temp;
    // 交換好後因為最後一個index已經被排序好了，所以後續再做minHeapify要略過，因此heapSize-1
    heapSize--;
    minHeapify(nums, heapSize, 0);
  }
  return nums;
};

var findKthLargest = function (nums, k) {
  // 先將nums用heapSort排好
  sortedNums = heapSortDesc(nums);
  return sortedNums[k - 1];
};
console.log(findKthLargest((nums = [3, 2, 1, 5, 6, 4]), (k = 2)));
console.log(findKthLargest((nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]), (k = 4)));
