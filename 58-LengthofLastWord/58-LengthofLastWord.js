// Last updated: 7/1/2026, 5:50:19 PM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6    let arr = s.trim().split(" ");
7    let len = arr.length;
8    return arr[len - 1].length;
9    
10};