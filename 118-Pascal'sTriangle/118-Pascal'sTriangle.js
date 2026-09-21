// Last updated: 9/21/2026, 1:34:12 PM
1/**
2 * @param {number} numRows
3 * @return {number[][]}
4 */
5var generate = function(numRows) {
6    let result = [];
7    for (let i = 0;  i < numRows; i++){
8        result.push([]);
9        for(let j = 0; j <= i ; j++){
10            
11
12            if(j == 0 || j == i){
13            result[i][j] = 1;
14            }
15            else{
16                result[i][j] = result[i - 1][j - 1] + result[i-1][j];
17            }
18            
19            
20        }
21    }
22
23    return result;
24};