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

// 使用Merge Sort的解法
const merge = function (arr1, arr2) {
  // i與j pointer分別指向arr1與arr2
  let i = 0;
  let j = 0;
  let result = [];
  // 如果i與j都還沒超出範圍的話while loop繼續
  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      // 如果arr1[i]<arr[j]的話將arr1[i]放入result array中
      result.push(arr1[i]);
      // i向右移動1
      i++;
    } else {
      // 否則arr2[j]放入result array中
      result.push(arr2[j]);
      // j向右移動1
      j++;
    }
  }

  // 如果此while迴圈執行代表arr2的所有element都已經push到result array中了
  // 因為arr1,arr2本身都已排序好，所以直接將arr1剩下的所有element都push到result array中
  while (i <= arr1.length - 1) {
    result.push(arr1[i]);
    i++;
  }

  // 如果此while迴圈執行代表arr1的所有element都已經push到result array中了
  // 因為arr1,arr2本身都已排序好，所以直接將arr2剩下的所有element都push到result array中
  while (j <= arr2.length - 1) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

const mergeSort = function (nums) {
  // mergeSort要將nums先切分為nums.length個長度為1的array，因為長度為1的array一定是排序好的
  if (nums.length === 1) {
    return nums;
  } else {
    let middle = Math.floor(nums.length / 2);
    let left = nums.slice(0, middle);
    let right = nums.slice(middle, nums.length);
    // 若是nums.length!=1的話就將nums從中間切兩半分成left, right
    // 會將left與right切到長度為1才會執行merge
    return merge(mergeSort(left), mergeSort(right));
  }
};

let nums = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1];

// console.log(heapSort([5, 1, 1, 2, 0, 0]));
// console.log(heapSort([5, 2, 3, 1]));
console.log(mergeSort(nums));
