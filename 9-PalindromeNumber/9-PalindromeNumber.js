// Last updated: 6/19/2026, 5:55:14 PM
1/**
2 * @param {number} x
3 * @return {boolean}
4 */
5var isPalindrome = function(x) {
6  let y = Number(String(x).split('').reverse().join(''));
7  return x === y;
8};