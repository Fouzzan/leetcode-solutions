// Last updated: 6/14/2026, 12:13:53 AM
1/**
2 * @param {number[]} nums
3 * @return {void} Do not return anything, modify nums in-place instead.
4 */
5var moveZeroes = function(nums) {
6    let insertPos = 0;
7   for(let i = 0; i < nums.length; i++ )
8   {
9        if(nums[i] !== 0)
10        {
11            nums[insertPos] = nums[i];
12            insertPos++;
13        }
14        
15   }
16   while(insertPos < nums.length)
17   {
18    nums[insertPos] = 0;
19    insertPos++;
20   }
21   
22
23};