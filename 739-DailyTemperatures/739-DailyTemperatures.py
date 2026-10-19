# Last updated: 10/19/2026, 9:55:04 PM
1class Solution:
2    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
3        stack =[]
4        result = [0] * len(temperatures)
5        for i in range(len(temperatures)):
6            while stack and temperatures[i] > temperatures[stack[-1]]:
7                previous_index = stack.pop()
8                result[previous_index] = i - previous_index
9            stack.append(i)
10                
11            
12
13            
14        return result
15            
16            