/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 // head = [1,2,3,4,5,6,7], left = 3, right = 6
 // frontEnd = 2nd node
 // reverse 3 to 6
    // fE->3(C),4(N),5,6
    // 4,3,5,6 (bring next node to first)
    // 5,4,3,6
    // 6,5,4,3, 
var reverseBetween = function(head, left, right) {
    // initiate frontEnd to dummy node
    // move frontEnd to left prev
    let dummy = new ListNode(0, head);
    let frontEnd = dummy;

    for (let i = 1; i < left; i++) {
        frontEnd = frontEnd.next;
    }

    // reverse nodes
    let current = frontEnd.next;
    for (let j = 0; j < right - left; j++) {
        let next = current.next;

        // bring next node to front
        current.next = next.next;
        next.next = frontEnd.next;
        frontEnd.next = next;
    }

    return dummy.next;

    
};