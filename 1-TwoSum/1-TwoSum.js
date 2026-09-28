// Last updated: 9/28/2026, 11:56:24 PM
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    let map = new Map();
8
9    for(let i = 0; i < nums.length; i++){
10        let need = target - nums[i];
11
12        if(map.has(need)){
13            return [i, map.get(need)]
14        }
15
16        map.set(nums[i], i);
17    }
18};