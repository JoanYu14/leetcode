// 給定一個大小為 n 的整數數組分數，其中 Score[i] 是比賽中第 i 位運動員的分數。所有分數都保證是唯一的。
// 運動員根據成績排名，第一名運動員得分最高，第二名運動員得分第二高，以此類推。每位運動員的排名決定了他們的排名：
// 第一名運動員的等級為「Gold Medal」。
// 第二名運動員的等級為「Silver Medal」。
// 第三位運動員的等級為「Bronze Medal」。
// 對於第4到第n名的運動員，他們的名次是他們的名次編號（即第x名運動員的名次是「x」）。
// 傳回大小為 n 的陣列answer，其中answer[i] 是第 i 位運動員的排名。
// Example 1:
// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:
// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

// 定義Node class，val為score，index為第幾個
class Node {
  constructor(val, index) {
    this.val = val;
    this.index = index;
  }
}

class PiorityQueue {
  constructor() {
    this.nodes = [];
  }

  maxHeapify = function (index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let largest = index;
    if (
      left < this.nodes.length &&
      this.nodes[largest].val < this.nodes[left].val
    ) {
      largest = left;
    }

    if (
      right < this.nodes.length &&
      this.nodes[largest].val < this.nodes[right].val
    ) {
      largest = right;
    }

    if (largest !== index) {
      let temp = this.nodes[largest];
      this.nodes[largest] = this.nodes[index];
      this.nodes[index] = temp;
      this.maxHeapify(largest);
    }
  };

  // 將queue中第一個取出(score最大的)
  dequeue = function () {
    if (this.nodes.length === 1) {
      return this.nodes.pop();
    } else {
      let temp = this.nodes[0];
      this.nodes[0] = this.nodes[this.nodes.length - 1];
      this.nodes[this.nodes.length - 1] = temp;
      let result = this.nodes.pop();
      this.maxHeapify(0);
      return result;
    }
  };

  enqueue = function (val, index) {
    let node = new Node(val, index);
    this.nodes.push(node);
    if (this.nodes.length === 1) {
      return;
    }
    let enqueueIndex = this.nodes.length - 1;
    let parentIndex = Math.floor((enqueueIndex - 1) / 2);
    while (
      parentIndex >= 0 &&
      this.nodes[enqueueIndex].val > this.nodes[parentIndex].val
    ) {
      let temp = this.nodes[enqueueIndex];
      this.nodes[enqueueIndex] = this.nodes[parentIndex];
      this.nodes[parentIndex] = temp;
      enqueueIndex = parentIndex;
      parentIndex = Math.floor((enqueueIndex - 1) / 2);
    }
  };
}

var findRelativeRanks = function (score) {
  let pq = new PiorityQueue();
  let result = [];
  // 將socre一一enqueue到pq中，並push null到result中，這樣後面才能將答案按照index儲存在result中對應的位置
  score.forEach((val, index) => {
    pq.enqueue(val, index);
    result.push(null);
  });

  for (let order = 0; order < result.length; order++) {
    // 每次loop都取出當前queue中score最大的
    let node = pq.dequeue();
    // 如果order為0代表是原本queue中所有nodes裡面val最大的，就是第一名
    if (order === 0) {
      result[node.index] = "Gold Medal";
    } else if (order === 1) {
      result[node.index] = "Silver Medal";
    } else if (order === 2) {
      result[node.index] = "Bronze Medal";
    } else {
      result[node.index] = `${order + 1}`;
    }
  }

  return result;
};

let result = findRelativeRanks([10, 3, 8, 9, 4]);
console.log(result);
let result2 = findRelativeRanks([5, 4, 3, 2, 1]);
console.log(result2);
