// Last updated: 8/11/2026, 7:08:46 AM
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7     let map1 = new Map();
8     let map2 = new Map();
9     let count = 1;
10    //  s = s.split('');
11
12    if(s.length !== t.length) return false;
13
14    for(let i = 0; i < s.length; i++){
15        if(map1.has(s[i])){
16            map1.set(s[i], map1.get(s[i]) + 1);
17        }
18        else{
19             map1.set(s[i], 1);
20        }
21       if(map2.has(t[i])){
22        map2.set(t[i], map2.get(t[i]) + 1);
23       }
24       else{
25        map2.set(t[i], 1)
26       }
27    }
28
29    console.log(map1);
30    console.log(map2);
31    if(map1.size !== map2.size) return false;
32    for(let [key, value] of map1){
33        if(!map2.has(key)){
34            
35            return false;
36        }
37        if(map1.get(key) !== map2.get(key)){
38            return false;
39        }
40    }
41
42    return true;
43};