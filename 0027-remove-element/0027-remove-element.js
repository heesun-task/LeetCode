/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/* Note
- goal: 
    - remove all occurences of vals in nums. 
    - return # of el.s in nums that not equal to val : k
    - first k els in nums contain the els not equal to val
- conditions:
    - nums: rest except first k els are not important (including size, order)

 */
var removeElement = function(nums, val) {
    let cnt = 0; /// next position for a valid element
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[cnt] = nums[i]
            cnt++
        }

    }
    return cnt;
    
};