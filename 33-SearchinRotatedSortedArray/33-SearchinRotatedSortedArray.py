# Last updated: 10/21/2026, 4:33:04 PM
1class Solution:
2    def search(self, nums: list[int], target: int) -> int:
3        # left = nums[0]
4        # right = nums[len(nums) - 1]
5        for i in range(len(nums)):
6            if nums[i] == target:
7                return i
8            
9        return -1
10