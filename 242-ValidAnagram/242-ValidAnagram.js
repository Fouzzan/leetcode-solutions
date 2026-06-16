// Last updated: 6/16/2026, 9:37:22 AM
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7    if (s.length !== t.length)
8    {
9        return false;
10    }
11    if(s.split('').sort().join() === t.split('').sort().join())
12    {
13        return true;
14    }
15    else{
16        return false;
17    }
18};