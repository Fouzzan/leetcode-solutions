// Last updated: 8/8/2026, 10:25:47 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var numIdenticalPairs = function(nums) {
6    let count = 0;
7    for(let i = 0; i < nums.length; i++){
8        for(let j = 0; j < nums.length; j++){
9            if(nums[i] === nums[j] && i < j){
10                count++;
11            }
12        }
13    }
14    return count;
15};