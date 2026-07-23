// Last updated: 7/23/2026, 4:50:02 PM
1/**
2 * @param {number[]} nums
3 * @return {void} Do not return anything, modify nums in-place instead.
4 */
5var moveZeroes = function(nums) {
6    let insertPos = 0;
7
8    for(let i = 0; i < nums.length; i++){
9        if(nums[i] !== 0){
10            nums[insertPos] = nums[i];
11            insertPos++;
12        }
13        
14
15        
16    }
17    while(insertPos < nums.length){
18        nums[insertPos] = 0;
19        insertPos++
20    }
21
22};