// Last updated: 8/11/2026, 4:14:22 PM
1/**
2 * @param {number[]} nums
3 * @param {number} n
4 * @return {number[]}
5 */
6var shuffle = function(nums, n) {
7    let arr1 = [];
8    let arr2 = [];
9    let result = [];
10
11    for(let i = 0; i < nums.length; i ++){
12        if(i < n){
13            arr1[i] = nums[i]
14        }
15        else{
16            arr2[i - n] = nums[i];
17        }
18    }
19    console.log(arr1);
20    console.log(arr2);
21
22    for(let j = 0; j < n; j++){
23        result.push(arr1[j]);
24        result.push(arr2[j]);
25    }
26    return result;
27};