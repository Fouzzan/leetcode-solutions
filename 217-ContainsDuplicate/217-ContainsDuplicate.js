// Last updated: 7/23/2026, 4:49:30 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let set = new Set(nums);
7    return set.size !== nums.length;
8};