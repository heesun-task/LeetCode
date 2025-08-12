/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // initialize a map
    const dict = new Map();

    // in a loop for i in nums,
    for (let i = 0; i < nums.length; i++){
        // for current value nums[i]
        let currVal = nums[i]
        // pair is target - currVal
        let pair = target - currVal;

        // if pair existis in dictionary as a key
        if (dict.has(pair)) {
            // return value (index) of pair and i (current idx)
            return [dict.get(pair), i];
        }
        else {
            // add key:currVal, value: i (idx) pair to dictionary
            dict.set(currVal, i);
        }
    }

    // always exactly one solution, so just return [-1,-1] to handle any error case
    return [-1, -1];
};