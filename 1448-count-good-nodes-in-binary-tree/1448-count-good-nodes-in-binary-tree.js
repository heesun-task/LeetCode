/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;

    const recursion = (r, max) => {
        if (r===null) return;

        if (r.val >= max) count++;

        const nextMax = Math.max(max, r.val);

        recursion(r.left, nextMax)
        recursion(r.right, nextMax)
    }

    recursion(root, -Infinity)

    return count;
    
};