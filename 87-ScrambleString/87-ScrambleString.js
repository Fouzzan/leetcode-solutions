// Last updated: 7/1/2026, 5:56:08 PM
1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function(nums1, m, nums2, n) {
9   let i = m - 1;
10   let j = n - 1;
11   let k = m + n - 1;
12
13   while(j >= 0)
14   {
15    if((i >= 0) && (nums1[i] > nums2[j]))
16    {
17        nums1[k] = nums1[i];
18        i--; 
19    }
20    else
21    {
22        nums1[k] = nums2[j];
23        j--;
24    }
25    k--;
26   }
27
28};