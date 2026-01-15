/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();

    return nums.some(cur => {
        if (set.has(cur)) return true;
        set.add(cur);
        return false;
    });
};