/**
 * @param {number[]} nums
 * @return {number}
 */
 // L: sum of left subarray 
 // R: sum of right subarray 
 // T: total sum
 // D: sum difference
 // D = L - R = L - (T - L) = 2L - T
 // To decide the parity of D, only T matters.
 // Since 2L is always even, D and T always have the same parity.
 // So, if T is even, D is always even fo any partition
var countPartitions = function(nums) {
    // let sum = 0;
    // for (const num of nums) sum += num;
    const sum = nums.reduce((a, b) => a + b, 0);

    const isSumParity = sum % 2 === 0;
    return isSumParity ? nums.length - 1 : 0;
};

// Time complexity: O(n)
// Space complexity: O(1)