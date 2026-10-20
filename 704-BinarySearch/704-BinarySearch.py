# Last updated: 10/20/2026, 7:27:12 AM
1class Solution:
2    def search(self, nums: list[int], target: int) -> int:
3        left = 0
4        right = len(nums) - 1
5        
6
7        while (left <= right):
8            middle = (left + right) // 2
9            if nums[middle] == target:
10                return middle
11            elif nums[middle] < target:
12                left = middle + 1
13            else:
14                right = middle - 1
15        return -1
16
17        
18
19        