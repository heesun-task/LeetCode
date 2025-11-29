/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Build a map from value -> index in inorder
    // e.g. inorder = [10, 9, 1]  =>  {10:0, 9:1, 1:2}
    const inIndexMap = new Map();
    for (let i = 0; i < inorder.length; i++)
        inIndexMap.set(inorder[i], i)

    let currentRoot = 0; // root of each subtree

    // get left and right most indexes as prameters
    // the window = subtree
    const helper = (inLeft, inRight) => {
        if (inLeft > inRight) return null; // no subtree

        // find root node and value
        const rootVal = preorder[currentRoot++]
        const root = new TreeNode(rootVal);

        // find the position of root in inorder
        const mid = inIndexMap.get(rootVal);

        // divide and recursively build left and right sub tree
        root.left = helper(inLeft, mid - 1);
        root.right = helper(mid + 1, inRight);
        return root 
    }

    return helper(0, inorder.length - 1)
};