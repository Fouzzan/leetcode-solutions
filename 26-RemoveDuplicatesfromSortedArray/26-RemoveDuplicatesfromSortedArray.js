// Last updated: 6/10/2026, 9:27:33 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function(nums) {
6    let index = 1;
7    for(let i = 0; i < nums.length - 1; i++)
8    {
9        if(nums[i] != nums[i + 1])
10        {
11            nums[index] = nums[i + 1];
12            index++;
13            
14        }
15    }
16    return index;
17};