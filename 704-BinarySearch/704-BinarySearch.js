// Last updated: 7/28/2026, 8:53:55 PM
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var search = function(nums, target) {
7   let left = 0;
8   let right = nums.length - 1;
9
10   while (left <= right){
11    let middle = Math.floor((left + right) / 2);
12    if (nums[middle] === target){
13        return middle
14    }
15    else if(target > nums[middle]){
16        left = middle + 1;
17    }
18    else{
19        right = middle - 1;
20    }
21   }
22
23   return -1
24
25
26};