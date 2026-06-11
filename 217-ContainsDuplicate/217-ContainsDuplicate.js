// Last updated: 6/11/2026, 9:35:51 AM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6   const mySet = new Set(nums);
7   if(mySet.size !== nums.length)
8   {
9    return true;
10   }
11   else{
12    return false;
13   }
14   
15    
16};