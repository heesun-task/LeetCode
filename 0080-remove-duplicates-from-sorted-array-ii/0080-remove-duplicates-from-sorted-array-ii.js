/**
 * @param {number[]} nums // sorted in increasing order
 * @return {number} // first # slots of nums
 */
 // Requirement: in-place (no extra space), each unique el at most twice

//    k
// [1,1,1,2,2,3]
//        i
//      k
// [1,1,2,2,2,3]
//          i
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length

    // k tracks the position of the last valid values
    let k = 1;

    for (let i = 2; i < nums.length; i++) {
        // compare current element at i with one el before at k
        if (nums[i] !== nums[k-1]) {
            nums[k+1] = nums[i];
            k++
        }
    }

    // return the length of the valid values
    return k + 1;
};