// 給定一個已排序鍊錶的頭，刪除所有重複項，以便每個元素只出現一次。傳回已排序的鍊錶。
// Input: head = [1,1,2]
// Output: [1,2]
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 預設current為head
  let current = head;

  // 如果current不為null則繼續while loop
  while (current !== null) {
    // oriNext為current.next
    let oriNext = current.next;
    // 如果oriNext為null的話就終止while loop
    if (oriNext === null) {
      break;
    }

    if (oriNext.val === current.val) {
      // oriNext.val與current.val相同的話
      // 如果oriNext不為null並且oriNext.val與current.val相同的話則繼續while loop
      while (oriNext !== null && oriNext.val === current.val) {
        console.log(
          `原本的oriNext.val : ${oriNext.val}與current.val:${current.val}相同，所以oriNext要往下:${oriNext.next}`
        );
        // 讓oriNext變成oriNext.next
        oriNext = oriNext.next;
      }
      // 到這裡代表oriNext為null或者current.val與oriNext.val已經不同了
      // 就將current.next指向oriNext
      current.next = oriNext;
    }
    // current變成current.next
    current = current.next;
  }
  return head;
};
