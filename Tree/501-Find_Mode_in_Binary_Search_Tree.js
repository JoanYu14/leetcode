// 給定root一個具有重複項的二元搜尋樹 (BST)，傳回其中的所有眾數（即最常出現的元素）。
// 如果樹有多個眾數，則以任意順序傳回它們。
// 假設 BST 定義如下：
// 節點的左子樹僅包含鍵小於或等於該節點鍵的節點。
// 節點的右子樹僅包含鍵大於或等於該節點鍵的節點。
// 左子樹和右子樹也必須是二元搜尋樹。
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var findMode = function (root) {
  // 記錄所有 Node.val 出現的次數
  let counter = {};

  // 將max和ans包在一個Object中，因為這樣較不會出現閉包的問題
  let result = { ans: [], max: 0 };

  // 深度優先樹遍歷(pre-order)
  let traversal = function (node) {
    if (!node) {
      return;
    }
    // 如果counter中沒有這個node.value代表這個數是第一次出現，counter[node.val]就設定為1
    if (!counter[node.val]) {
      counter[node.val] = 1;
    } else {
      // 否則就將counter[node.val]+1
      counter[node.val]++;
    }

    // 如果當前這個數字出現的頻率(counter[node.val])大於最大頻率，更新結果
    if (counter[node.val] > result.max) {
      result.max = counter[node.val];
      result.ans = [node.val]; // 重設答案為當前節點的value代表目前的眾數為node.val
    } else if (counter[node.val] === result.max) {
      // 如果counter[node.val] == result.max的話代表有兩個眾數，不會重複因為如果本來node.val就是眾數的話會符合上面的if不會==reuslt.max因為頻率有+1
      result.ans.push(node.val); // 加入當前節點
    }

    // 遞迴遍歷左右子樹
    traversal(node.left);
    traversal(node.right);
  };

  // 開始遍歷
  traversal(root);

  return result.ans;
};

let node3 = new TreeNode(2);
let node2 = new TreeNode(2, node3);
let root = new TreeNode(1, null, node2);

// let root = new TreeNode(0, null, null);

// let node2 = new TreeNode(1);
// let root = new TreeNode(1, node2, null);
console.log(findMode(root));
// let array = [2, 2, 3];
