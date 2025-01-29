# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# 
class Solution(object):
    def removeElements(self, head, val):
        """
        :type head: Optional[ListNode]
        :type val: int
        :rtype: Optional[ListNode]
        """
        # retrieve all nodes
        dummy = ListNode(0)
        dummy.next = head
        prev, current = dummy, head
        while current is not None:
            # if current node's val is same as val
            if current.val == val:
                # remove current node
                prev.next = current.next
            else:
                prev = current
            current = current.next
        return dummy.next
        