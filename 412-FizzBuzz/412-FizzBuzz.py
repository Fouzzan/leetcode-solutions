# Last updated: 5/27/2026, 7:12:30 AM
class Solution(object):
    def fizzBuzz(self, n):
        i = 0
        answer = []
        for i in range(1,n+1):

            if i % 3 == 0 and i % 5 == 0:
                answer.append("FizzBuzz")

            elif i % 3 == 0:
                answer.append("Fizz")

            elif i % 5 == 0:
                answer.append("Buzz")
            else:
                answer.append(str(i))  
            i += 1

        return answer
        
        