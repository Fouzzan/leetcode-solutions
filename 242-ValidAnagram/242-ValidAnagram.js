// Last updated: 8/10/2026, 1:15:54 PM
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7     s = s.split('').sort().join('');
8     t = t.split('').sort().join('');
9
10     console.log(s);
11     console.log(t);
12
13    return (s === t)? true : false;
14
15};