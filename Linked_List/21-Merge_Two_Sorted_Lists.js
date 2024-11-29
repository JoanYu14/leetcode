// 給你兩個Sorted Linked List的頭list1和list2。
// 將兩個list合併為一個sorted list。這個list應該透過將前兩個list的node拼接在一起來形成。
// 傳回合併linked list的head。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// list1與list2會傳入分別的Linked List的head
var mergeTwoLists = function (list1, list2) {
  // 先用兩個變數分別存入兩個head
  let list1CurrentNode = list1;
  let list2CurrentNode = list2;
  let resultHead = list1;
  if (list1 === null) {
    resultHead = list2;
  }
  // 如果兩個currentNode都不是null就繼續
  while (list1CurrentNode != null && list2CurrentNode != null) {
    console.log();
    let printNode = resultHead;
    while (printNode !== null) {
      console.log(printNode.val);
      printNode = printNode.next;
    }

    console.log(
      `whileLoop: list1CurrentNode:${list1CurrentNode.val}; list2CurrentNode:${list2CurrentNode.val}`
    );
    if (list1CurrentNode.val < list2CurrentNode.val) {
      console.log(
        `list1CurrentNode:${list1CurrentNode.val} < list2CurrentNode:${list2CurrentNode.val}`
      );
      // 找到list2現在的Node要插入到list1的哪裡，因為有可能list1的下一個Node還是比較小
      // list1的下一個Node還是比較list2現在的Node小的話則繼續迴圈
      while (
        list1CurrentNode.next != null &&
        list1CurrentNode.next.val < list2CurrentNode.val
      ) {
        console.log(
          `list1CurrentNode.next = ${list1CurrentNode.next.val}，還是比list2CurrentNode:${list2CurrentNode.val}小`
        );
        list1CurrentNode = list1CurrentNode.next;
      }

      console.log(
        `目前list1CurrentNode:${list1CurrentNode.val} < list2CurrentNode:${list2CurrentNode.val}`
      );
      // 如果list2現在的Node比list1小，那就將目前list1的Node.next改成list2現在的Node
      // 先將list1現在的Node原本的next存起來
      let temp = list1CurrentNode.next;
      // 將list1現在的Node.next改成指向list2現在的Node
      list1CurrentNode.next = list2CurrentNode;

      // list2現在的Node改成下一個list2的Node
      list2CurrentNode = list2CurrentNode.next;

      // 將list1現在node的nextNode(從list2插入的那個Node).next改成temp
      list1CurrentNode.next.next = temp;
      // list1現在的Node往右移動1(變成剛新增的那個Node)
      list1CurrentNode = list1CurrentNode.next;
    } else {
      console.log(
        `list1CurrentNode:${list1CurrentNode.val} > list2CurrentNode:${list2CurrentNode.val}`
      );
      // 若list1現在的Node大於list2現在的Node的話，list2現在的Node要插入到list1現在的Node前面
      // 若list1CurrentNode等於現在的head的話，就代表新的頭會是list2插入的node
      if (list1CurrentNode == resultHead) {
        console.log(
          `list1CurrentNode為head，所以head要改成:${list2CurrentNode.val}`
        );
        resultHead = list2CurrentNode;
        console.log(`目前的head:${resultHead.val}`);
      }
      // 先將list2現在的Node.next存起來
      let temp = list2CurrentNode.next;

      // temp.next改成指向list1現在的Node
      list2CurrentNode.next = list1CurrentNode;
      list1CurrentNode = list2CurrentNode;
      // list2CurrentNode往右移動
      list2CurrentNode = temp;
    }
  }

  return resultHead;
};
