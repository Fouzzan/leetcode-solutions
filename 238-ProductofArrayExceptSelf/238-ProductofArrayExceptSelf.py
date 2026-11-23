# Last updated: 11/23/2026, 8:37:08 PM
1class Solution:
2    def productExceptSelf(self, nums: list[int]) -> list[int]:
3        result = [1] * len(nums)
4        suffix = 1
5        prefix = 1
6        for y in range(len(nums)):
7            print(y)
8            result[y] = prefix
9            prefix *= nums[y]
10        for x in range(len(nums) - 1, -1, -1):
11            result[x] *= suffix
12            suffix *= nums[x]
13        
14        return result
15
16        