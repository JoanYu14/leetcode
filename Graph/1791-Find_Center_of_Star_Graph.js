// 有一個無向星圖，由標記為 1 到 n 的 n 個節點組成。
// 星形圖是一種圖，其中有一個中心節點，並且恰好有 n - 1 條邊將中心節點與每個其他節點連接起來。
// 給定一個 2D 整數陣列 Edges，其中每個 Edges[i] = [ui, vi] 表示節點 ui 和 vi 之間有一條邊。返回給定星圖的中心。
// Example 1:
// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
// Example 2:
// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1
/**
 * @param {number[][]} edges
 * @return {number}
 */

// 只要看前兩個edge就能知道了，因為每個edge都一定會連接到中心點
// 所以就看兩個edge共同的vertex是哪個就知道了
var findCenter = function (edges) {
  let [a1, a2] = edges[0];
  let [b1, b2] = edges[1];
  if (a1 == b1 || a1 == b2) {
    return a1;
  } else {
    return a2;
  }
};
console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);
console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
);
