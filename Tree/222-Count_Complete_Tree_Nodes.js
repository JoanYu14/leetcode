//給定完全二元樹的根，傳回樹中節點的數量。
//根據維基百科，每個層級（可能除了最後一個層級）都完全填充在完全二元樹中，並且最後層級中的所有節點都盡可能遠離左側。它可以有 1 到 2h 個節點（包括最後一層 h）。
//設計一個運行時間複雜度小於 O(n) 的演算法。
// Example1
//Input: root = [1,2,3,4,5,6]
//Output: 6

//Example 2:
//Input: root = []
//Output: 0

//Example 3:
//Input: root = [1]
//Output: 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let sum = 0;
  // 用DFTT來做
  const traversal = function (node) {
    if (node !== null) {
      sum++;
      if (node.left) {
        traversal(node.left);
      }
      if (node.right) {
        traversal(node.right);
      }
    }

    return sum;
  };

  return traversal(root);
};
