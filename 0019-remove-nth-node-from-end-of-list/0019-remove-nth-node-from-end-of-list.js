/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 // Create a dummy node before the head to handle edge cases easily
 // Initialize two pointers: slow and fast at thedummy
 // Move the fast pointer n steps ahead
 // Then move both fast and slow one step at a time until fast reaches the end
 // At this point, slow is just before the node to be removed
 // Remove the nth node from the end by skipping slow.next
 // Finally, return dummy.next as the new head of the list
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let slow = fast = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next !== null ) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;    
};