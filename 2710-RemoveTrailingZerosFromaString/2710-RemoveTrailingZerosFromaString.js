// Last updated: 6/19/2026, 6:07:26 PM
1/**
2 * @param {string} num
3 * @return {string}
4 */
5var removeTrailingZeros = function(num) {
6    for(let i = num.length - 1; i >= 0; i--)
7    {
8        if(num[i] != 0)
9        {
10            let n = num.slice(0,i+1);
11            return n;
12        }
13    }
14};