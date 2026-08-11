// Last updated: 8/11/2026, 7:09:44 AM
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
27    console.log(map1);
28    console.log(map2);
29    if(map1.size !== map2.size) return false;
30    for(let [key, value] of map1){
31        if(!map2.has(key)){
32            
33            return false;
34        }
35        if(map1.get(key) !== map2.get(key)){
36            return false;
37        }
38    }
39
40    return true;
41};