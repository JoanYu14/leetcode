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

// 使用Quick Sort => quickSort會遇到worst case => O(n^2)
// 參數doPartArrStr,doPartArrEnd分別帶入做partition的array的起始index與結尾index
const partition = function (nums, doPartArrStr, doPartArrEnd) {
  // 將doPartArrEnd當作pivotIndex
  let pivotIndex = doPartArrEnd;
  // i變數為儲存小於pivot的part的最右邊index，目前沒有小於pivot的part所以為do_part_arr_str-1
  // ex: doPartArrStr=0的話目前i就是-1
  let i = doPartArrStr - 1;
  // j的起始值為do_part_arr_str，每次迴圈+1，直到<=doPartArrEnd-1(~做partition的arr的結尾index前一個index)
  for (let j = doPartArrStr; j <= doPartArrEnd - 1; j++) {
    // 製作小於pivot的part
    if (nums[j] < nums[pivotIndex]) {
      // 如果nums[j]小於pivot的話
      // i+1 => 代表小於pivot的part範圍+1 => 小於pivot的part的最右邊index+1，nums[j]就要換到這個位置
      // ex: ori_i = -1(還未有小於pivot的part), if條件成立 => i+1=0, 此時小於pivot的part結尾index就是0(part的length為1=> nums[j]為第一個小於pivot的value)
      i += 1;
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }
  // i+1 => 這個i原本為小於pivot的part的last index，i+1就是pivot應該在的位置，i+1後面的index的value都大於pivot(大於pivot的part)
  i += 1;
  let temp = nums[i];
  nums[i] = nums[pivotIndex];
  nums[pivotIndex] = temp;
  // 將排序好的index回傳
  return i;
};

// 第一次呼叫時arr_str=0 , arrEnd=nums.length-1
const quickSort = function (nums, arrStr, arrEnd) {
  if (arrEnd > arrStr) {
    // 呼叫partition取得nums[arrStr: arrEnd+1]做partition得到的sortedIndex
    const sortedIndex = partition(nums, arrStr, arrEnd);
    // 再將小於sortedIndex的part與大於sortedIndex的part在做quickSort
    quickSort(nums, arrStr, sortedIndex - 1);
    quickSort(nums, sortedIndex + 1, arrEnd);
  }
  return nums;
};

const sortArray = function (nums) {
  const result = quickSort(nums, 0, nums.length - 1);
  return result;
};

console.log(sortArray(inputArr));
