/**
 * @param {number[]} nums
 * @return {number} modulo(10^9)+ 7 of the number of special triplets
 */
 // i < j < k : 0 ~ (nums.length - 1)
 // special triplets:
 // ith = jth * 2 = kth

var specialTriplets = function(nums) {
    const MOD = 1_000_000_007;
    const left = new Map()
    const right = new Map();
    let result = 0;

    // initiate right map to save the freq of num in nums
    for (const x of nums) {
        const valX = right.get(x) || 0;
        right.set(x, valX + 1);
    }

    for (const x of nums) {
        // minus freq in right for current x
        right.set(x, right.get(x) - 1);
        
        // find freq of x * 2 in left and right maps
        const db = x * 2;
        const lFreq = left.get(db) || 0;
        const rFreq = right.get(db) || 0;

        result = (result + lFreq * rFreq) % MOD;

        left.set(x, (left.get(x) || 0) + 1);
    }

    return result;
}