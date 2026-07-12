// Last updated: 7/12/2026, 10:38:47 PM
1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5var longestCommonPrefix = function(strs) {
6    let prefix = strs[0];
7    
8    for (let i = 0; i < strs.length; i++){
9       while(! strs[i].startsWith(prefix)){
10        prefix = prefix.slice(0, prefix.length-1)
11       }
12    }
13
14    return prefix;
15};