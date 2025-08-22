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
 * @param {number} k
 * @return {number}
 */
 // use in-order to traverse nodes in left-root-right order
 // sol 1) recursion: strightforward, but if h=n (worst case), Space Comp=O(n)
 // sol 2) stack: stable, lengthy
 // both time complexity = O(n), Space complexity = O(h)
var kthSmallest = function(root, k) {
    let result = null;

    const inorder = (node) => {
        if (!node || result != null) return; // stop if result found
        
        inorder(node.left);
        if (result != null) return; // stop if result found from the left node
        
        k--; 
        if (k === 0) {
            result = node.val
        }
        
        inorder(node.right);    
    }

    inorder(root)

    return result;
};