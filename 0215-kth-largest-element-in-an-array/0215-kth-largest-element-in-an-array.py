import heapq

class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        # initiate a min heap
        heap = []
        
        for n in nums:
            #  push element (heapq manage list as the min-heap structure; heapify_up: parent <= child)
            heapq.heappush(heap, n)
            if len(heap) > k:
                heapq.heappop(heap)
        return heap[0]

        