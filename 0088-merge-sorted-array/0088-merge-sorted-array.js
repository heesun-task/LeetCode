/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // create two pointers
    let nums1Ptr = 0;
    let nums2Ptr = 0;

    let mergedArr = []

    // iterate until one of the pointer over m for nums1 or n for nums2
    // while comparing num1 and num2 and push the smaller one to mergedArr and move the pointer +1
    // if pointers over m or n, simple push rest numbers to mergedArr
    while (true) {
        if (nums1Ptr === m) {
            mergedArr.push(...nums2.slice(nums2Ptr, nums2.length))
            break;
        }
        if (nums2Ptr === n) {
            mergedArr.push(...nums1.slice(nums1Ptr, nums1.length))
            break;
        }
        if (nums1[nums1Ptr] < nums2[nums2Ptr]) {
            mergedArr.push(nums1[nums1Ptr])
            nums1Ptr++

        } else {
            mergedArr.push(nums2[nums2Ptr])
            nums2Ptr++
        }
    }

    // copy mergedArr to nums1 while keelping length of nums1 to m+n 
    for (let i = 0; i < m + n; i++) {
        nums1[i] = mergedArr[i];
    }
    
};