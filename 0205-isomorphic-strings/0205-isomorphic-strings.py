class Solution(object):
    # isomorphic: mapping chars 1:1, order matters
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False

        mapping_s = {}
        mapping_t = {}

        for i in range(len(s)):
            char_s = s[i]
            char_t = t[i]

            # get previou index or -1 if not
            prev_s = mapping_s.get(char_s, -1)
            prev_t = mapping_t.get(char_t, -1)

            if prev_s != prev_t:
                return False
            
            mapping_s[char_s] = i
            mapping_t[char_t] = i
        return True
             


        
        