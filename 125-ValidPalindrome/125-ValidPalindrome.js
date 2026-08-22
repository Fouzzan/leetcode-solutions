// Last updated: 8/22/2026, 11:21:32 AM
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    s = s.toLowerCase();
7    const cleanS = s.replace(/[^a-z0-9]/gi, ""); 
8    let reverse = cleanS.split("").reverse().join("");
9    if ( cleanS == reverse)
10    {
11        return true;
12    }
13    else
14    {
15        return false;
16    }
17};