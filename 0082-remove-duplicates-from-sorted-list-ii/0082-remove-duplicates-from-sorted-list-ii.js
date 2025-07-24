/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // edge cases
    if (!head || !head.next)
        return head;

    // set two pointers: slow, fast
    const dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = head;

    // loop while fast.next !== null
    while (fast) {
        // Check if current node has duplicates
        if (fast.next && fast.val === fast.next.val){
            let currentVal = fast.val;
            while (fast && fast.val === currentVal){
                fast = fast.next
            }
            slow.next = fast
        } else {
            slow = fast;
            fast = fast.next;
        }
    }

    return dummy.next;
};