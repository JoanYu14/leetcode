// 給定二元樹的根，返回其最大深度。
// 二元樹的最大深度是從根節點到最遠葉節點的最長路徑上的節點數。
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2
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
var maxDepth = function (root) {
  const getDepth = function (node, depth) {
    console.log();
    console.log(`當前depth:${depth}`);
    if (node !== null) {
      // 如果當前node不為0的話代表該node是存在的，那depth+=1
      console.log(`node.val:${node.val}，depth要加1變成:${depth + 1}`);
      depth = depth + 1;
      // 然後再用該node的左右節點搭配目前depth呼叫getDepth函數，並且取depth最大的值
      return Math.max(getDepth(node.left, depth), getDepth(node.right, depth));
    } else {
      // 如果當前node為null的話就直接return depth就好
      console.log(`當前node不存在，直接return depth:${depth}`);
      return depth;
    }
  };
  // 使用root與0當參數呼叫getDepth函數
  return getDepth(root, 0);
};
