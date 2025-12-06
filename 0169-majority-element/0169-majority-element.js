/**
 * @param {number[]} nums 
 * @return {number} 
 * majority element always exists (appears more than [n/2] times)
 * constraints: majority elem always exists (# of majority = always one)
 * 
 * Boyer–Moore Voting Algorithm
 * - Maintain a candidate and a counter
 * - Increase count for same value, decrease for different
 * - Majority element survives all cancellations
 */

var majorityElement = function(nums) {
    let candidate;
    let count = 0;

    for (const num of nums) {
        // choose a candidate: if count is 0, set the candidate as the current num
        if (count === 0) candidate = num;
        // if candidate is same as num, increase a count
        if (candidate === num) count++;
        // if different, decrease a count
        else count--;
    }

    // candidate is guaranteed to be the majority element
    return candidate;
};