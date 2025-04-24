class Solution(object):
    # s: sentence
    # pattern: words in s mapped to single letters
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        # create a list of words, split s with spaces
        words = s.split(' ')
        if len(pattern) != len(words):
            return False

        # create a dictionary to store pattern and word pairs
        mapping = {}

        for p, w in zip(pattern, words):
            print(mapping)
            if p in mapping:
                # If pattern is in mapping, check if the pattern maps to the same word
                if mapping[p] != w:
                    return False
            else:
                # If the pattern is new but the word is already in a different pattern, return False
                if w in mapping.values():
                    return False
                mapping[p] = w

        return True

        