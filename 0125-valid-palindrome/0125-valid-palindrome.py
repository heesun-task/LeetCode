# Time Complexity: O(n)
# Space Complexity: O(1)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Use two pointers from both ends
        left, right = 0, len(s) - 1

        # Move inward from both ends, ignore non-alphanumeric chars
        # and compare chars case-insensitively. 
        while left < right:
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1
            if s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True