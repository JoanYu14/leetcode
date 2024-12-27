// 給定一個 m x n 整數數組網格。有一個機器人原本位於左上角（即 grid[0][0]）。機器人嘗試移動到右下角（即 grid[m - 1][n - 1]）。機器人在任何時間點只能向下或向右移動。
// 障礙物和空間在網格中分別標示為 1 或 0。機器人所走的路徑不能包含任何障礙物。
// 返回機器人到達右下角可能採取的唯一路徑的數量。
// 產生測試案例時，答案將小於或等於 2 * 109。
// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

/*
1. 狀態函數(查詢表) => m*n的矩陣 => f(m,n) = value(到m,n有多少種路線)
2. 初始值設定 => 上面那排(row=0)與左邊(col=0)那排都為1，因為只能向下或向右走
3. 狀態轉移公式 => f(m,n) = f(m-1,n)+f(m,n-1)，因為要到達m,n一定要從上面那格或左邊那格來
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const memo = Array(obstacleGrid.length)
    .fill(null)
    .map(() =>
      Array(obstacleGrid[0].length).fill(undefined, 0, obstacleGrid[0].length)
    );
  if (obstacleGrid[0][0] !== 1) {
    memo[0][0] = 1;
  } else {
    // 如果左上角就有障礙物的話根本就不能開始，所以直接return 0
    return 0;
  }

  const getPaths = function (memo, row, col) {
    console.log(`row:${row}, col:${col}`);
    if (row === -1 || col === -1) {
      console.log(`row:${row}, col:${col}不在範圍內回傳0`);
      // 如果row或col為-1代表不在範圍內所以return 0
      return 0;
    } else if (obstacleGrid[row][col] === 1) {
      // 如果obstacleGrid[row][col]為1代表這格有障礙物無法到達，因此路線為0
      console.log(`row:${row}, col:${col}這個位置為障礙物，因此路線為0`);
      memo[row][col] = 0;
      return memo[row][col];
    } else if (memo[row][col] !== undefined) {
      console.log(`row:${row}, col:${col}計算過了，答案為:${memo[row][col]}`);
      // 如果memo[row][col]不為undefined代表有計算過了
      return memo[row][col];
    } else {
      // f(m,n) = f(m-1,n)+f(m,n-1)，因為要到達m,n一定要從上面那格或左邊那格來
      memo[row][col] =
        getPaths(memo, row - 1, col) + getPaths(memo, row, col - 1);
      return memo[row][col];
    }
  };

  return getPaths(memo, obstacleGrid.length - 1, obstacleGrid[0].length - 1);
};
console.log(
  uniquePathsWithObstacles(
    (obstacleGrid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  )
);
console.log(
  uniquePathsWithObstacles(
    (obstacleGrid = [
      [0, 1],
      [0, 0],
    ])
  )
);
