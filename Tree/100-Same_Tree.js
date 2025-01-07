// 給定兩個二元樹p和的根q，寫一個函數來檢查它們是否相同。
// 如果兩個二元樹結構相同且節點具有相同的值，則認為它們是相同的。
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Input: p = [1,2,1], q = [1,1,2]
// Output: false
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 先預設ans為true
  let ans = true;
  // 如果p,q一開始就都為null的話直接return true，如果是其中一個為null的話就return false
  if (p === null && q === null) {
    return true;
  } else if (p === null && q !== null) {
    return false;
  } else if (p !== null && q === null) {
    return false;
  }

  // 定義traversal函數，參數為node1, node2分別就是p與q在相同位置的node
  let traversal = function (node1, node2) {
    console.log(`node1:${node1.val}, node2:${node2.val}`);
    if (node1.val !== node2.val) {
      // 如果node1與node2的val不同就將ans改為false並直接return出去
      console.log(`if1`);
      ans = false;
      return;
    } else if (
      (node1.left !== null && node2.left == null) ||
      (node2.left !== null && node1.left == null)
    ) {
      // 如果node1或node2其中一個有left但另一個沒有的話也將ans改為false並return
      console.log(`if2`);
      ans = false;
      return;
    } else if (
      (node1.right !== null && node2.right == null) ||
      (node2.right !== null && node1.right == null)
    ) {
      // 如果node1或node2其中一個有right但另一個沒有的話也將ans改為false並return
      console.log(`if3`);
      ans = false;
      return;
    }
    if (node1.left !== null && node2.left !== null) {
      // 如果node1與node2的left都不為null的話就將node1.left與node2.left作為參數呼叫traversal函數
      traversal(node1.left, node2.left);
    }
    if (node1.right !== null && node2.right !== null) {
      // 如果node1與node2的right都不為null的話就將node1.right與node2.right作為參數呼叫traversal函數
      traversal(node1.right, node2.right);
    }
  };

  traversal(p, q);
  return ans;
};
var isSameTree = function (p, q) {
  // 如果兩個node都為null就return true
  if (p === null && q === null) {
    return true;
  }
  // 如果兩個只有一個node為null就return false
  if (p === null || q === null) {
    return false;
  }
  // 如果兩個node的val不同就return false
  if (p.val !== q.val) {
    return false;
  }

  // 遞迴的比較left與right
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
