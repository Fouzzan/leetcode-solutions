// Last updated: 9/29/2026, 5:41:29 PM
1var threeSum = function(nums) {
2
3    nums.sort((a, b) => a - b);
4    let result = [];
5
6    for (let i = 0; i < nums.length - 2; i++) {
7
8        let left = i + 1;
9        let right = nums.length - 1;
10
11        if(i > 0 && nums[i] === nums[i - 1]){
12            continue;
13        }
14
15        while (left < right) {
16
17            let sum = nums[i] + nums[left] + nums[right];
18
19            if (sum === 0) {
20                result.push([nums[i], nums[left], nums[right]]);
21                left++;
22                right--;
23
24                while(left < right && nums[left] === nums[left - 1]){
25                    left++
26                }
27                while(left < right && nums[right] === nums[right + 1]){
28                    right--
29                }
30            }
31            else if (sum < 0) {
32                left++
33            }
34            else {
35                right--;
36            }
37        }
38    }
39    ;
40
41    return result;
42
43};