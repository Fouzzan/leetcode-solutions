// Last updated: 8/8/2026, 10:22:53 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function(nums) {
6    let total = nums[0];
7    let sum = 0;
8    for (let i = 0; i < nums.length; i++) {
9        sum = Math.max(nums[i], sum + nums[i])
10        total = Math.max(total, sum);
11    }
12    return total;
13};