// 給定一個有向無環圖，其中 n 個頂點編號為 0 到 n-1，以及一個數組邊，其中edges[i] = [fromi, toi] 表示從節點 fromi 到節點 toi 的有向邊。
// 求圖中所有節點均可到達的最小頂點集。保證存在唯一的解決方案。
// 請注意，您可以按任何順序返回頂點。
// Ex1
// Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// Output: [0,3]
// Explanation: It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].

// Ex2
// Input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
// Output: [0,2,3]
// Explanation: Notice that vertices 0, 3 and 2 are not reachable from any other node, so we must include them. Also any of these vertices can reach nodes 1 and 4.
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  // canVisit儲存有哪些vertex是可以由其他vertex到達的
  const canVisit = new Set();
  // 遍歷edges，將可以到達的vertex存在canVisit裡面
  edges.forEach((edge) => {
    let [from, to] = edge;
    console.log(`從${from}到${to}`);
    canVisit.add(to);
  });
  // 先定義result為空陣列
  let result = [];
  // 看每個vertex是否有在canVisit Set裡面，沒有的話就push到result
  for (let i = 0; i < n; i++) {
    if (!canVisit.has(i)) {
      result.push(i);
    }
  }
  // 最後return result
  return result;
};
console.log(
  findSmallestSetOfVertices(
    (n = 6),
    (edges = [
      [0, 1],
      [0, 2],
      [2, 5],
      [3, 4],
      [4, 2],
    ])
  )
);
console.log(
  findSmallestSetOfVertices(
    (n = 5),
    (edges = [
      [0, 1],
      [2, 1],
      [3, 1],
      [1, 4],
      [2, 4],
    ])
  )
);
