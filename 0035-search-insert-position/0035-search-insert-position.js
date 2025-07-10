/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // two pointers: left=0 right= nums.length - 1
    let left = 0, right = nums.length - 1

    // iterate until left > right
    while (left <= right) {
        // find the mid Math.floor((left + right) / 2)
        const mid = Math.floor((left + right) / 2)

        // if nums[mid] == target => return mid
        if (nums[mid] === target) return mid 
        // else if nums[mid] > target => right = mid -1 
        else if (nums[mid] > target) right = mid - 1 
        // else nums[mid] < target  => left = mid + 1
        else left = mid + 1
    }

    //  return left pointer 
    return left;
    
};