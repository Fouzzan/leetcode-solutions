// Last updated: 8/10/2026, 3:34:35 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var numIdenticalPairs = function(nums) {
6    let count = 0;
7    for(let i = 0; i < nums.length - 1; i++){
8        for(let j = i + 1; j < nums.length; j++){
9            if(nums[j] === nums[i]){
10                count++;
11            }
12        }
13    }
14    return count;
15};