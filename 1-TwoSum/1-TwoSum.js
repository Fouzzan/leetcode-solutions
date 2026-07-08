// Last updated: 7/8/2026, 11:33:43 AM
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    for (let i = 0; i< nums.length - 1; i++){
8        for(j= i+1; j < nums.length; j++){
9            if(nums[i] + nums[j] === target){
10                return [i,j]
11            }
12        }
13    }
14};