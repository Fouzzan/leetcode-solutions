// Last updated: 7/13/2026, 4:20:57 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNumber = function(nums) {
6
7    let map = new Map();
8    let result = 0;
9   for( let num of nums){
10     result = result ^ num
11   }
12
13   return result
14};