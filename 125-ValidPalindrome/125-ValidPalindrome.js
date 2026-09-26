// Last updated: 9/26/2026, 9:53:26 PM
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    s = s.toLowerCase();
7    let length = s.length;
8    let left = 0;
9    let right = length - 1;
10
11    while (left < right){
12        let code1 = s[left].charCodeAt(0);
13        let code2 = s[right].charCodeAt(0);
14
15        if( ((code1 >= 97 && code1 <= 122) || (code1 >= 48 && code1 <= 57))){
16           if( ((code2 >= 97 && code2 <= 122) || (code2 >= 48 && code2 <= 57))){
17            if(s[left] === s[right] ){
18            left++;
19            right--;
20            }
21            else{
22            // console.log(s[left]);
23            // console.log(s[right])
24            return false;
25            }
26        }
27        else{
28            right--;
29        }
30           
31        }
32        else{
33            left++;
34        }
35        
36        
37       
38        
39    }
40    
41    return true;
42};