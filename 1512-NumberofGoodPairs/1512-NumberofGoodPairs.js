// Last updated: 8/8/2026, 10:45:39 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var numIdenticalPairs = function(nums) {
6    let count = 0;
7    
8    for(let i = 0; i < nums.length - 1; i++){
9        let arr = [];
10         if(!arr.includes(nums[i])){
11            arr.push(nums[i]);
12            console.log(`arr on ${i}th iteration: ${arr}`)
13         }
14        for(let j = i + 1; j < nums.length; j++){
15           if(arr.includes(nums[j])){
16            count++;
17            console.log(`count on iteration i = ${i} and j =  ${j} => ${count} `)
18           }
19        }
20    }
21    return count;
22};