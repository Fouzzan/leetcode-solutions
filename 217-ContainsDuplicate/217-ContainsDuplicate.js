// Last updated: 8/10/2026, 12:57:40 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let arr = [...new Set(nums)]
7   return (arr.length === nums.length)? false : true;
8};