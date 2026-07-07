// Last updated: 7/7/2026, 6:14:37 PM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function(s) {
6    let left = 0;
7    let maxLength = 0;
8    const set = new Set();
9
10    for(let right = 0; right < s.length; right++)
11    {
12        while(set.has(s[right])){
13            set.delete(s[left]);
14            left++;
15            
16        }
17        set.add(s[right]);
18        maxLength = Math.max(maxLength, right - left + 1)
19    }
20
21    return maxLength;
22    
23};