// Last updated: 7/14/2026, 5:24:40 PM
1/**
2 * @param {number[]} nums
3 * @param {number} val
4 * @return {number}
5 */
6var removeElement = function(nums, val) {
7    let k = 0;
8    for(let i = 0; i < nums.length; i++){
9        if(nums[i] !== val){
10            nums[k] = nums[i];
11            k++;
12        }
13        
14    }
15    return k
16    
17};