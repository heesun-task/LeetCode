from collections import Counter

class Solution(object):
    def string_to_dict(self, s):
         return dict(Counter(s)) # O(1 * n)

    def custom_string_dict(self, s): # study purpose
        temp = {}
        for char in s:
            if char in temp:
                temp[char] += 1
            else:
                temp[char] =1
        return temp # O(n)

    def custom_string_dict2(self, s): # study purpose
        return {char: s.count(char) for char in set(s)} # worst O(n * n + n)


    # Return true if the letters of ransomeNote are all included in the magazine
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        # Create a dictionary with key: letter, value: # of letters in magazine 
        # (e.g., magazine = "aab", dict = {'a': 2, 'b': 1})
        letterCountDict = self.string_to_dict(magazine)
        
        # Loop each letter of ransome Note
        for letter in ransomNote:
            # check existence of the letter in dict
            print(letter)
            if letter in letterCountDict:
                # -1 the value
                letterCountDict[letter] -= 1
                # if letterCountDict[letter] = 0, remove 
                if (letterCountDict[letter] == 0) :
                    del letterCountDict[letter]
            else:
                return False
        return True
        
        