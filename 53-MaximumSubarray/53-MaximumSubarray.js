// Last updated: 7/29/2026, 5:01:03 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function(nums) {
6    let result = nums[0];
7    let maxEnd = nums[0];
8    for (let i = 1; i < nums.length; i++){
9        
10        maxEnd = Math.max(maxEnd + nums[i], nums[i]);
11
12        result = Math.max(result, maxEnd);
13    }
14
15    return result;
16};