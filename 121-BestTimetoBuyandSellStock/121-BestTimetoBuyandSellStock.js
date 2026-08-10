// Last updated: 8/10/2026, 11:28:41 AM
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let profit = 0;
7    let buy = Infinity;
8    let sell = prices[prices.length - 1];
9   for(let i = 0; i < prices.length; i++){
10
11    if(prices[i] < buy) {
12        buy = prices[i];
13    }
14
15    profit = Math.max(profit, (prices[i] - buy));
16
17
18    
19    // if(prices[i] > buy && (prices.indexOf(buy) < i )){
20    //     sell = Math.max(sell , prices[i])
21    // }
22    // if(prices[i] < buy && (prices.indexOf(sell) > i)){
23    //     buy = Math.min(buy, prices[i]);
24    // }
25
26    
27
28   }
29   
30   return (profit > 0 ) ? profit : 0;
31   
32};