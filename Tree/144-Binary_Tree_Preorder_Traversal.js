// 給定二元樹的根，傳回其節點值的前序遍歷。
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
var preorderTraversal = function (root) {
  let result = [];
  const traversal = function (node) {
    result.push(node.val);
    if (node.left) {
      traversal(node.left);
    }
    if (node.right) {
      traversal(node.right);
    }
    return result;
  };
  if (root == null) {
    return result;
  } else {
    return traversal(root);
  }
};
