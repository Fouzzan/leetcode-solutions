// Last updated: 7/12/2026, 10:39:48 PM
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ");
    let len = arr.length;
    return arr[len - 1].length;
    
};