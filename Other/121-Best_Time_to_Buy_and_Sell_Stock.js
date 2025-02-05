/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 預設buyPrice為prices[0]
  let buyPrice = prices[0];
  // 預設profit為0
  let profit = 0;
  // 遍歷prices
  for (let i = 1; i < prices.length; i++) {
    // 如果prices[i]<buyPrice的話就將buyPrice改為prices[i]
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else {
      // 否則profit就為profit與兩個相減較大的數
      profit = Math.max(profit, prices[i] - buyPrice);
    }
  }
  // 回傳profit
  return profit;
};
