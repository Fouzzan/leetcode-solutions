# Last updated: 10/23/2026, 12:48:46 PM
1class Solution:
2    def search(self, nums: list[int], target: int) -> int:
3        left = 0
4        right = len(nums) - 1
5        
6
7        while left <= right:
8            middle = (left + right) // 2
9            if target == nums[middle]:
10                return middle
11            
12            if nums[left] <= nums[middle]:
13                if target < nums[middle] and target >= nums[left]:
14                    right = middle - 1
15                else:
16                    left = middle + 1
17
18                
19            else:
20                if target > nums[middle] and target <= nums[right]:
21                    left = middle + 1
22                else:
23                    right = middle - 1
24        
25        return -1
26       