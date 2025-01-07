// 給定二元樹的根，傳回其節點值的in-order遍歷。
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]

// Example 3:
// Input: root = []
// Output: []

// Example 4:
// Input: root = [1]
// Output: [1]
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
 * @return {number[]}
 */

// in-order的順序是left, root, right
var inorderTraversal = function (root) {
  // 如果root為null的話直接return空陣列
  if (root == null) {
    return [];
  }
  // 預設result為空陣列
  let result = [];

  const traversal = function (node) {
    // 如果node.left不為null的話就將node.left作為參數呼叫traversal函數
    if (node.left !== null) {
      traversal(node.left);
    }
    // left為null時將node(root) push到result中
    result.push(node.val);
    if (node.right !== null) {
      traversal(node.right);
    }
  };
  traversal(root);
  return result;
};
