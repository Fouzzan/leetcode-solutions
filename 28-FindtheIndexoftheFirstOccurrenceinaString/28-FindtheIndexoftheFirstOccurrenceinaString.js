// Last updated: 7/15/2026, 3:47:40 PM
1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6var strStr = function(haystack, needle) {
7    if(haystack.includes(needle)){
8        return haystack.indexOf(needle)
9    }
10    else{
11        return -1
12    }
13};