// Last updated: 7/27/2026, 10:52:17 PM
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var search = function(nums, target) {
7    return (nums.includes(target))?(nums.indexOf(target)):(-1)
8};