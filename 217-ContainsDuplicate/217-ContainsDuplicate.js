// Last updated: 8/11/2026, 10:40:59 AM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let set = new Set();
7    for(let i = 0; i < nums.length; i++){
8        if(set.has(nums[i])){
9            return true;
10        }
11        set.add(nums[i]);
12
13    }
14    return false
15};