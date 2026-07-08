// Last updated: 7/8/2026, 12:25:16 PM
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isValid = function(s) {
6    const stack = [];
7
8    for(let  x of s){
9        if(x === "(" || x === "{" || x === "[")
10        {
11            stack.push(x);
12        }
13        else if(x === ")")
14        {
15            if(stack[stack.length-1] === "("){
16                stack.pop();
17            }
18            else{
19                return false
20            }
21        }
22        else if(x==="]"){
23            if(stack[stack.length - 1] === "["){
24                stack.pop();
25            }
26            else{
27                return false
28            }
29
30        }
31        else if(x === "}"){
32            if(stack[stack.length - 1 ] === "{"){
33                stack.pop()
34            }
35            else{
36                return false
37            }
38        }
39    }
40    if(stack.length === 0){
41        return true
42    }
43    else{
44        return false
45    }
46
47};