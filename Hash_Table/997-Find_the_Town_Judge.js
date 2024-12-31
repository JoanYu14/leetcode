// 在一個城鎮裡，有n個人被標記為1到n。有傳言說，其中一位秘密是鎮法官。
// 如果鎮法官存在，則：
// 鎮法官不相信任何人。
// 每個人（除了鎮法官）都信任鎮法官。
// 恰好有一個人滿足性質 1 和 2。
// 給你一個信任數組，其中 trust[i] = [ai, bi] 表示標記為 ai 的人信任標記為 bi 的人。如果信任陣列中不存在信任關係，則該信任關係也不存在。
// 如果城鎮法官存在並且可以識別，則返回該城鎮法官的標籤，否則返回-1。
// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2

// Example 2:
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3

// Example 3:
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // memo紀錄每個人的得票數(被幾個人信任)
  const memo = {};
  // ans儲存最後答案
  let ans;
  // veteMemo儲存每個人是否有投票
  const voteMemo = {};
  for (let i = 1; i <= n; i++) {
    // 先預設每個人都為0票
    memo[i] = 0;
    // 先預設每個人都沒投票信任誰
    voteMemo[i] = false;
  }
  trust.forEach((person) => {
    // person[0]投過票了，一定不是法官
    voteMemo[person[0]] = true;
    let vote = person[1];
    // vote的票數+1
    memo[vote]++;
  });

  // 去看voteMemo中有誰沒投票，因為條件1:法官不會相信任何人
  Object.keys(voteMemo).forEach((person) => {
    if (voteMemo[person] === false) {
      if (ans !== undefined) {
        // 代表有兩個人沒投票，這樣就不符合條件1
        ans = -1;
      } else {
        ans = person;
      }
    }
  });
  if (memo[ans] !== n - 1) {
    // 如果ans的票數不等於n-1的話就不符合條件2:所有人都相信法官
    ans = -1;
  }

  return Number.parseInt(ans);
};
console.log(
  findJudge(
    (n = 3),
    (trust = [
      [1, 3],
      [2, 3],
    ])
  )
);
console.log(
  findJudge(3, [
    [1, 2],
    [2, 3],
  ])
);
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);
console.log(findJudge(1, []));
