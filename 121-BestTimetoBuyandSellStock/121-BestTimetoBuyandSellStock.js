// Last updated: 8/10/2026, 11:32:05 AM
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let profit = 0;
7    let buy = Infinity;
8   for(let i = 0; i < prices.length; i++){
9    if(prices[i] < buy) {
10        buy = prices[i];
11    }
12    profit = Math.max(profit, (prices[i] - buy));
13 } 
14   return profit
15};