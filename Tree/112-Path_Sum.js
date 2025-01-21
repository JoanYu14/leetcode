// 給定二元樹的根和一個整數 targetSum，如果樹具有從根到葉的路徑，並且沿路徑的所有值相加等於 targetSum，則傳回 true。
// 葉子節點是沒有子節點的節點。
// EX1
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// EX2
// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 先預設ans為false
  let ans = false;
  // 使用depth-first tree traversal來找到pathSum
  const traversal = function (node, sum, targetSum, ans) {
    // 如果ans為true的話直接return ans就好
    if (ans === true) {
      return ans;
    }
    // 將sum加上當前node.val
    sum += node.val;

    // 如果node.left存在，那就用node.left呼叫traversal函數，並且將結果return給ans
    if (node.left !== null) {
      console.log(node.left);
      ans = traversal(node.left, sum, targetSum, ans);
    }

    // 如果node.right存在，那就用node.left呼叫traversal函數，並且將結果return給ans
    if (node.right !== null) {
      console.log(node.right);
      ans = traversal(node.right, sum, targetSum, ans);
    }

    // 如果node.right與node.left不存在，代表當前的node為leaf，如果sum===targetSum的話就return true否則return false
    if (node.right === null && node.left === null) {
      console.log(`走到${node.val}的sum為:${sum}，答案為:${sum === targetSum}`);
      if (sum === targetSum) {
        return true;
      } else {
        return false;
      }
    }
    // 最後return ans
    return ans;
  };

  if (root === null) {
    return false;
  } else {
    return traversal(root, 0, targetSum, ans);
  }
};
