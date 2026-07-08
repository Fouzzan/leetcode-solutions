// Last updated: 7/8/2026, 1:53:52 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let set = [...new Set(nums)];
7    if(set.length === nums.length){
8        return false
9    }
10    else
11    {
12        return true
13    }
14};