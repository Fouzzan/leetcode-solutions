// Last updated: 7/8/2026, 4:51:35 PM
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var fib = function(n) {
6    let a = 0;
7    let b = 1;
8
9    let sum = 0;
10
11
12    if(n < 2){
13            return n
14        }
15    else{
16          for (let i = 2; i <= n; i++){
17        
18        sum = a + b ;
19        a = b;
20        b = sum;
21        
22    }
23    }
24  
25    return sum;
26    
27};