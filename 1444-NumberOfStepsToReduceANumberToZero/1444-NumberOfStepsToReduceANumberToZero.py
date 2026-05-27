# Last updated: 5/27/2026, 7:12:33 AM
class Solution(object):
    def numberOfSteps(self, num):
        """
        :type num: int
        :rtype: int
        """
        i = 0
        while num > 0:

         if num % 2 == 0:
            num /= 2
            i += 1
         else :
            num -= 1
            i += 1
        return i
        