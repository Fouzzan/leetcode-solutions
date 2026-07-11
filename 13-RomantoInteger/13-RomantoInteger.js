// Last updated: 7/11/2026, 1:08:38 PM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var romanToInt = function(s) {
6    let map = new Map();
7
8    map.set("I" , 1);
9    map.set("V", 5);
10    map.set("X", 10);
11    map.set("L", 50);
12    map.set("C", 100);
13    map.set("D", 500);
14    map.set("M", 1000);
15    
16
17    const arr = s.split("");
18    sum = 0;
19
20    for(let i = 0; i < s.length; i++) {
21        if(map.get(s[i]) < map.get(s[i + 1])){
22            sum  -= map.get(s[i]);
23        }
24        else{
25            sum += map.get(s[i]);
26        }
27
28    
29    }
30
31    return sum;
32};
33
34