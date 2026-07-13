// Last updated: 7/13/2026, 4:22:03 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNumber = function(nums) {
6    let result = 0;
7   for( let num of nums){
8     result = result ^ num
9   }
10
11   return result
12};