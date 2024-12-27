// 給定一個整數 numRows，傳回帕斯卡三角形的第一個 numRows。
// 在帕斯卡三角形中，每個數字都是其正上方兩個數字的總和，如下所示：
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]
/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
1. 狀態函數(HashTable): f(row,col) = value
    col 0   1   2   3   4
row     
0       1   X   X   X   X
1       1   1   X   X   X
2       1   2   1   X   X
3       1   3   3   1   X
4       1   4   6   4   1

2. 初始狀態: [0][0] = 1，第一個值為1 
            最左邊那排(col=0)一定是1，因為要用(row-1,col-1)+(row-1,col) = f(row,col)
            但是最左邊那排的col=0 => col-1不存在，所以一定會是0

3. 狀態轉移公式: fn(row,col) = fn(row-1,col-1)+fn(row-1,col)
                就是左上value+上方value
*/
var generate = function (numRows) {
  // 1. 建立table(狀態函數) => 每一row有rowIndex+1個element(每一層多一個element)
  const memo = Array(numRows)
    .fill(null)
    .map((value, rowIndex) => Array(rowIndex + 1).fill(undefined));
  //初始狀態: [0][0] = 1，第一個值為1
  memo[0][0] = 1;
  const getValue = function (row, col, memo) {
    if (memo[row][col] !== undefined) {
      console.log(
        `Pascal's Triangle的第[${row}]層的第[${col}]個已經計算過，值為:${memo[row][col]}`
      );
      return memo[row][col];
    } else if (row === col) {
      console.log(`Pascal's Triangle的第[${row}]層的第[${col}]個的值一定為1`);
      // 因為上面一層的col數量比當前這層少1，所以當要找每層的最後一個(row==col)=>[row-1][col]會沒有值，而因為[row-1][col-1]也會遇到，所以相加會一直是1
      // 每層的第一個的左上都沒有值，上方都是1，所以也一定為1
      memo[row][col] = 1;
      return memo[row][col];
    } else if (col < 0) {
      // 也可以在這個if條件加上col>row，因為每個row最大colIndex就是row的value，所以col>row的value不存在。
      // 加上後上一個else if (row===col)可以刪除
      console.log(
        `Pascal's Triangle的第[${row}]層的第[${col}]個不存在所以直接回傳0`
      );
      return 0;
    } else {
      console.log(
        `還不知道第[${row}]層的第[${col}]個的值 => [${row - 1}]層的第[${
          col - 1
        }]個的值 + [${row}-1]層的第[${col}]個的值`
      );
      memo[row][col] =
        getValue(row - 1, col - 1, memo) + getValue(row - 1, col, memo);
      return memo[row][col];
    }
  };

  // 從最後面的值開始計算
  for (let i = numRows - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      getValue(i, j, memo);
      console.log(memo);
    }
  }

  // 最後直接return memo
  return memo;
};
console.log(generate(5));
