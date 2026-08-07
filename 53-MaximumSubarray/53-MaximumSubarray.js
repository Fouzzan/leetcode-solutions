// Last updated: 8/8/2026, 4:13:43 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function(nums) {
6    let total = nums[0];
7    let sum = 0;
8    if(nums.length === 1){
9        return nums[0]
10    }
11    for (let i = 0; i < nums.length; i++) {
12        sum += nums[i];
13
14        sum = (sum < nums[i]? nums[i]: sum);
15        
16   
17        total = Math.max(total, sum);
18    
19    
20    }
21    return total;
22};