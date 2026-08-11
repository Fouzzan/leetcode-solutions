// Last updated: 8/11/2026, 7:10:01 AM
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7     let map1 = new Map();
8     let map2 = new Map();
9
10    if(s.length !== t.length) return false;
11
12    for(let i = 0; i < s.length; i++){
13        if(map1.has(s[i])){
14            map1.set(s[i], map1.get(s[i]) + 1);
15        }
16        else{
17             map1.set(s[i], 1);
18        }
19       if(map2.has(t[i])){
20        map2.set(t[i], map2.get(t[i]) + 1);
21       }
22       else{
23        map2.set(t[i], 1)
24       }
25    }
26
27    if(map1.size !== map2.size) return false;
28    for(let [key, value] of map1){
29        if(!map2.has(key)){
30            
31            return false;
32        }
33        if(map1.get(key) !== map2.get(key)){
34            return false;
35        }
36    }
37
38    return true;
39};