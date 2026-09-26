// Last updated: 9/26/2026, 11:15:38 PM
1/**
2 * @param {number[]} digits
3 * @return {number[]}
4 */
5var plusOne = function(digits) {
6    
7   for (let i = digits.length - 1; i >= 0; i --){
8        if(digits[i] < 9){
9            digits[i] += 1
10            return digits
11        }
12        
13            digits[i] = 0
14   }
15        digits.unshift(1)
16        return digits
17
18   }
19
20    
21
22    
23
24    