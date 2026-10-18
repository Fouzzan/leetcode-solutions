# Last updated: 10/18/2026, 2:39:36 PM
1class Solution:
2    def productExceptSelf(self, nums: list[int]) -> list[int]:
3        
4        result = []
5        leftProduct = 1
6        rightProduct = 1
7        left = []
8        for i in range(len(nums)):
9            result.append(leftProduct)
10            leftProduct *= nums[i]
11        for j in range(len(nums) - 1, -1, -1):
12            result[j] *= rightProduct
13            rightProduct *= nums[j]
14        return result
15            
16            
17                
18            
19        return result            
20
21        
22
23
24    