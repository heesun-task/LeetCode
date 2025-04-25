class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        checked = set()

        for i in range(len(nums)):
            if i > k:
                checked.remove(nums[i - k - 1])
            if nums[i] in checked:
                return True
            checked.add(nums[i])
        return False


        