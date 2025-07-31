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
var removeNthFromEnd = function(head, n) {
    // edgecase: if head.next ===null return null 
    if (head.next === null) return null

    const dummy = new ListNode(0, head)
    // two pointers: 
    let slow = fast = dummy

    // move the fast pointer to the nth node from the first
    for (let i =0; i < n; i++) {
        fast = fast.next;
    }
    
    // Note: gap b/w slow and fast will be exactly the n

    // loop while  fast is not null
    while (fast !== null) {
        // then if the next of fast node is null,  
        if (fast.next === null) {
            //Note: (means the next node of slow pointer is the node I need to remove)
            // remove the next node of slow pointer
            slow.next = slow.next.next;
        }

        // move slow and fast pointers together by one
        slow = slow.next;
        fast = fast.next;
    }
    
    return dummy.next;

};