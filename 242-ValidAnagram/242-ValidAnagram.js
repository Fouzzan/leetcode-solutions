// Last updated: 8/11/2026, 10:38:27 AM
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7     let map = new Map();
8    if(s.length !== t.length) return false;
9    for(let i = 0; i < s.length; i++){
10        if(map.has(s[i])){
11            map.set(s[i], map.get(s[i]) + 1);
12        }
13        else{
14             map.set(s[i], 1);
15        }
16    }
17    for(let j = 0; j < t.length; j++){
18            if(map.has(t[j])){
19            map.set(t[j], map.get(t[j]) - 1);
20        }
21        else{
22            return false;
23        } 
24        if(map.get(t[j]) < 0){
25            return false;
26        }   
27    }
28
29    return true;
30
31      
32};