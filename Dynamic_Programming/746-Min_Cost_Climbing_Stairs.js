// 給定一個整數數組 cost，其中 cost[i] 是樓梯上第 i 步的成本。支付費用後，您可以爬一級或兩級台階。
// 您可以從索引 0 的步驟開始，也可以從索引 1 的步驟開始。
// 返回到達樓層頂部的最低成本。
// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

/**
 * @param {number[]} cost
 * @return {number}
 */

/*
1. 狀態函數(查詢表)
        index

            0               1               2
value   到達index0       到達index1      到達index2
        所需的最小cost   所需的最小cost   所需的最小cost

2. 初始狀態 : 因為一次可以走1或2層，所以可以從0或1開始，所以0和1index的最小所需成本為0

        index
            0               1               2
value       0               0       到達index2
                                    所需的最小cost

3. 轉移公式 : f(index) = Math.min( f(index-1)+cost[index-1], f(index-2)+cost[index-2])
            =>因為一次可以走一層或兩層
            =>所以就去看走到index-1所需最小的成本+走過index-1所需的成本 and 走到index-2所需最小的成本+走過index-2所需的成本 哪個比較小
            =>比較小的就是走到index所需的最小成本
*/
var minCostClimbingStairs = function (cost) {
  // 1. 建立hashTable(狀態函數) : key=欲到達的index, value=達到index所需的最小成本
  // 2. 設定初始狀態: 一次可以走1or2層，所以可以從0or1開始走，所以index0與index1所需的最小成本為0
  const memo = { 0: 0, 1: 0 };
  const getMinCost = function (cost, index) {
    if (memo[index] !== undefined) {
      console.log(`已經知道到達[${index}]層所需的最小成本為:${memo[index]}`);
      // 如果memo中已經有index的value代表這層的最小所需成本已經計算過了
      return memo[index];
    } else {
      console.log(
        `還不知道到達[${index}]層所需的最小成本，所以需要得知Math.min(memo[${
          index - 1
        }]+cost[${index - 1}] , memo[${index - 2}]+cost[${index - 2}])`
      );
      memo[index] = Math.min(
        getMinCost(cost, index - 1) + cost[index - 1],
        getMinCost(cost, index - 2) + cost[index - 2]
      );
      return memo[index];
    }
  };

  // 不是cost.length-1是因為要"走完所有階梯"，而不是停在最後一階
  // 所以頂層的index是cost.length層，最後一階階梯index為cost.length-1層
  return getMinCost(cost, cost.length);
};
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

// ==== 第二種(查詢表value為經過index所需的cost)
/*
1. 狀態函數(查詢表)
        index

            0               1               2
value   經過index0       經過index1      經過index2
        所需的最小cost   所需的最小cost   所需的最小cost

2. 初始狀態 : 因為一次可以走1或2層，所以可以從0或1開始，所以0和1index的最小所需成本為cost[0]與cost[1]

        index
            0               1               2
value     cost[0]         cost[1]       到達index2
                                    所需的最小cost

3. 轉移公式1 : f(index) = Math.min( f(index-1), f(index-2)) +cost[index]
            =>因為一次可以走一層或兩層
            =>所以就去看經過index-1所需最小的成本and 經過index-2所需最小的成本 哪個比較小 再去 + cost[index]
            =>經過index所需的最小成本
     
*/
var minCostClimbingStairs2 = function (cost) {
  // 1. 建立hashTable(狀態函數) : key=欲到達的index, value=達到index所需的最小成本
  // 2. 設定初始狀態: 一次可以走1or2層，所以可以從0or1開始走，所以index0與index1所需的最小成本為0
  const memo = { 0: cost[0], 1: cost[1] };
  const getMinCost2 = function (cost, index) {
    if (memo[index] !== undefined) {
      console.log(`已經知道經過[${index}]層所需的最小成本為:${memo[index]}`);
      // 如果memo中已經有index的value代表這層的最小所需成本已經計算過了
      return memo[index];
    } else {
      console.log(
        `還不知道經過[${index}]層所需的最小成本，所以需要得知Math.min(memo[${
          index - 1
        }] , memo[${index - 2}])`
      );
      if (index !== cost.length) {
        memo[index] =
          Math.min(getMinCost2(cost, index - 1), getMinCost2(cost, index - 2)) +
          cost[index];
      } else {
        // index=cost.length代表是頂層了，就是找"到達"index所需的最小成本了，不是經過
        memo[index] = Math.min(
          getMinCost2(cost, index - 1),
          getMinCost2(cost, index - 2)
        );
      }

      return memo[index];
    }
  };

  // 不是cost.length-1是因為要"走完所有階梯"，而不是停在最後一階
  // 所以頂層的index是cost.length層，最後一階階梯index為cost.length-1層
  return getMinCost2(cost, cost.length);
};
