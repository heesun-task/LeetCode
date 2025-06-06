class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        # create dictionary to count number of chars
        d= dict()
        for char in s:
            if char in d: 
                d[char] += 1
            else:
                d[char] = 1

        # remove chars in dict
        for char in t:
            if (char in d): 
                d[char] -= 1
                if d[char] == 0:
                    del d[char]

            else:
                #if not exist, not anagram
                return False

        # If dictionary is empty, they are anagrams
        return len(d) == 0





        