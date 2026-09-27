// Last updated: 9/27/2026, 11:08:45 AM
1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7    let left = 0; 
8    let right = numbers.length - 1;
9    // let result = [];
10
11    while(left < right){
12        if(numbers[left] + numbers[right] === target){
13            return [left + 1, right + 1];            
14        }
15
16        if((numbers[left] + numbers[right]) > target){
17            right--;
18            continue;
19        }
20
21        if((numbers[left] + numbers[right]) < target){
22            left++;
23            continue
24        }
25    }
26
27
28    
29};