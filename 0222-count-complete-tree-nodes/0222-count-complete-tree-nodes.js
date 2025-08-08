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
var countNodes = function(root) {
    // Base case: empty tree
    if(!root) return 0;

    // helper to get h of the leftmost
    const leftHeight = (node) => {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    }

    // helper to get h of the rightmost
    const rightHeight = (node) => {
        let height = 0;
        while (node) {
            height++;
            node = node.right;
        }
        return height;
    }

    const leftH = leftHeight(root);
    const rightH = rightHeight(root);

    if (leftH === rightH) {
        // perfect binary tree
        // node count = 2^height - 1
        return (1 << leftH) - 1;
    } else {
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
};