# Last updated: 11/23/2026, 8:39:23 PM
1class Solution:
2    def productExceptSelf(self, nums: list[int]) -> list[int]:
3        result = [] 
4        suffix = 1
5        prefix = 1
6        for y in range(len(nums)):
7            result.append(prefix)
8            prefix *= nums[y]
9        for x in range(len(nums) - 1, -1, -1):
10            result[x] *= suffix
11            suffix *= nums[x]
12        
13        return result
14
15        