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
 * @return {number[]}
 */
 // [3]
 // 
var averageOfLevels = function(root) {
    let queue = [root];
    const avgs = []

    // loop while queue is not empty
    while (queue.length !== 0) {
        const lvSize = queue.length;
        let sum = 0;
        const nextQueue = [];

        // loop queue to lvSize
        for (let i = 0; i < lvSize; i++){
            const currNode = queue[i];
            // add  val of current node to sum
            sum += currNode.val;
            
            // add children of current node to queue if exist
            if(currNode.left) nextQueue.push(currNode.left);
            if(currNode.right) nextQueue.push(currNode.right);
        }

        // push avg to avgs
        avgs.push(sum / lvSize);

        queue = nextQueue;
    }
    
    return avgs;
};