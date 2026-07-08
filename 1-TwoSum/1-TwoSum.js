// Last updated: 7/8/2026, 11:47:29 AM
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    let map = new Map();
8    for(let i = 0; i < nums.length; i++){
9        
10
11        let need = target - nums[i];
12
13        if(map.has(need)){
14            return [map.get(need),i]
15        }
16        map.set(nums[i],i);
17    }
18};