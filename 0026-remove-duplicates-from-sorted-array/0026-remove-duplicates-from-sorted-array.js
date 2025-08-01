// GOAL: Remove duplicates -> keep only unique values
//  - keep order
//  - do it in-place
//  - return # of unique elements (k)

// input: sorted arr

/*
    sorted array, duplicates are adjacent --> use two pointers
    - k (slow pointer) tracks the next position to place a unique value
    - i (fast pointer) scans forward.
    if nums[i] !== nums[k-1], means nums[i] is a new unique value, 
    so copy it to nums[k] and move move k forward
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var removeDuplicates = function(nums) {
    // base condition:
    if (nums.length == 1) return 1;

    // two pointers: slow(k), fast(i)
    let k = i =1;

    for (; i < nums.length; i++) {
        if (nums[i] !== nums[k-1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};