// Last updated: 8/10/2026, 12:52:03 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let set = new Set(nums);
7    return set.size !== nums.length;
8};