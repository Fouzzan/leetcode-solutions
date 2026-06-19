// Last updated: 6/19/2026, 6:08:11 PM
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    for(let i = num.length - 1; i >= 0; i--)
    {
        if(num[i] != 0)
        {
            let n = num.slice(0,i+1);
            return n;
        }
    }
};