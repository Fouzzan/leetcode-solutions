// Last updated: 9/26/2026, 9:24:55 PM
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    s = s.toLowerCase();
7    let arr = [];
8    for(let i = 0; i < s.length; i++){
9        let code = s[i].charCodeAt(0);
10
11        if( (code >= 97 && code <= 122) || (code >= 48 && code <= 57)){
12            arr.push(s[i]);
13        }
14    }
15
16    if( arr.join('') === arr.reverse().join('')){
17        // console.log(arr);
18        // console.log(arr.reverse())
19        return true;
20
21    }
22    else{
23        return false;
24    }
25
26};