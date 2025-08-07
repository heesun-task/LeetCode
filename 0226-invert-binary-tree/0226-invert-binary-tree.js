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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;

    // exchange the left and right node 
    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    // do exchange in both left and right subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};