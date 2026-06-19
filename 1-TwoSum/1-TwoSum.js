// Last updated: 6/19/2026, 5:34:10 PM
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    for(let i = 0; i < nums.length; i++ )
8    {
9        
10        for(let j = 0; j < nums.length; j++)
11        {
12            if(nums[i] + nums[j] == target && i != j)
13            {
14                 return [i,j];
15            }
16        } 
17    }
18    
19};