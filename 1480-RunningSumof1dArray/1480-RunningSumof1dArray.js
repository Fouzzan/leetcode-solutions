// Last updated: 9/4/2026, 4:05:09 PM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var runningSum = function(nums) {
6    sum = 0;
7    for(let i = 0; i < nums.length; i++){
8        sum += nums[i];
9        nums[i] = sum;
10    }
11    return nums
12};