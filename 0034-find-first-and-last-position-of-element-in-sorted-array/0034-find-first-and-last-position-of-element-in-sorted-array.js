/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function binarySearch(nums, target, findFirst) {
    let left = 0;
    let right = nums.length - 1;
    let idx = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            idx = mid;
            if (findFirst) right = mid - 1;
            else left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return idx;
}

var searchRange = function(nums, target) {
    return [binarySearch(nums, target, true), binarySearch(nums, target, false)]
};