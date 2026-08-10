// Last updated: 8/10/2026, 1:07:56 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let map = new Set();
7    for(let i = 0; i < nums.length; i++){
8        if(map.has(nums[i])){
9            return true;
10        }
11        map.add(nums[i]);
12
13    }
14    return false
15};