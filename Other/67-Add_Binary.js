// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // left與right分別指向a,b的最後一位
  let left = a.length - 1;
  let right = b.length - 1;
  // 預設sum為空字串
  let sum = "";
  // 預設add為0，這是用來記錄進位的
  let add = 0;
  // 如果left>=0並且right也>=0就繼續while loop
  while (left >= 0 && right >= 0) {
    // current為a[left]+b[left]+add的值
    let current = Number.parseInt(a[left]) + Number.parseInt(b[right]) + add;
    console.log(
      `a[${left}]:${a[left]}, b[${right}]:${b[right]}，current:${current}`
    );

    if (current === 3) {
      // 如果current為3的話目前這位就是1，並且add為1
      sum = "1" + sum;
      add = 1;
    } else if (current === 2) {
      // 如果current為2的話目前這位就是0，並且add為0
      sum = "0" + sum;
      add = 1;
    } else if (current === 1) {
      // 如果current為1的話目前這位就是1，並且add為0
      sum = "1" + sum;
      add = 0;
    } else {
      // 如果current為0的話目前這位就是0，並且add為0
      sum = "0" + sum;
      add = 0;
    }
    left--;
    right--;
  }
  while (left >= 0) {
    let current = Number.parseInt(a[left]) + add;
    console.log(`a[${left}]:${a[left]}，current:${current}`);
    if (current === 2) {
      sum = "0" + sum;
      add = 1;
    } else if (current === 1) {
      sum = "1" + sum;
      add = 0;
    } else {
      sum = "0" + sum;
      add = 0;
    }
    left--;
  }

  while (right >= 0) {
    let current = Number.parseInt(b[right]) + add;
    if (current === 2) {
      sum = "0" + sum;
      add = 1;
    } else if (current === 1) {
      sum = "1" + sum;
      add = 0;
    } else {
      sum = "0" + sum;
      add = 0;
    }
    right--;
  }
  if (add === 1) {
    sum = "1" + sum;
  }

  return sum;
};
// console.log(addBinary((a = "11"), (b = "1")));
console.log(addBinary("1010", (b = "1011")));
