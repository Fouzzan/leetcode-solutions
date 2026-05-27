// Last updated: 5/27/2026, 7:12:32 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    const cleanS = s.replace(/[^a-z0-9]/gi, ""); 
    let reverse = cleanS.split("").reverse().join("");
    if ( cleanS == reverse)
    {
        return true;
    }
    else
    {
        return false;
    }
};