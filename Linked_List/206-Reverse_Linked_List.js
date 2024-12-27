// 給定Singly-LinkedList的head，反轉該list，並傳回反轉後的list。

// Example1.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

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
var reverseList = function (head) {
  // 先定義node為null，這是要用來設定當前node(head).next
  let node = null;

  // 如果head還為truthy value則繼續while loop
  while (head) {
    // temp先儲存head原本的next
    const temp = head.next;
    // 將head.next改為node
    head.next = node;
    // node改為head(當前node)
    node = head;
    // head改為temp(當前node原本的nextNode)
    head = temp;
  }

  return node;
};
