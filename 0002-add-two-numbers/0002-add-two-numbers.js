/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Create a dummy head to simplify list construction
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Continue while there are nodes to process or carry exists
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Calculate sum and new carry
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        // Create new node with the digit
        current.next = new ListNode(digit);
        current = current.next;

        // Move to next nodes if they exist
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummyHead.next;
};