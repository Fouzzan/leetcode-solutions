// Last updated: 9/25/2026, 7:42:12 PM
1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6    let map = new Map();
7    let result = [];
8    for(let i = 0; i < strs.length; i++){
9        let str = strs[i].split("").sort().join("");
10        
11        if(map.has(str)){
12            map.get(str).push(strs[i]);
13        }
14        else{
15            map.set(str, [strs[i]])
16        }
17
18
19    }
20    for(const [key, value] of map){
21        result.push(value);
22    }
23
24    return result;
25};