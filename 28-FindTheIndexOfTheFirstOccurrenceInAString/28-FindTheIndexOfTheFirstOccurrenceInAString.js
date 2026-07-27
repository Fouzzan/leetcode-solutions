// Last updated: 7/27/2026, 10:51:59 PM
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.includes(needle)){
        return haystack.indexOf(needle)
    }
    else{
        return -1
    }
};