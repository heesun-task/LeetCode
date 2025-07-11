/**
 * find the length of longest substring withour duplicate characters
 * @param {string} s
 * @return {number}
 */
// deal with substring, over different ranges
// use sliding window -> efficient for problems where you need to process all possible intervals
// but can't afford to check every possible combination
//
// use two pointers:left and right, represent current substring we're considering
// move the right pointer forward to include new characters
// check whether the character already exists in the current window
    // check sol 1) set->check exist 
    //     2) map-> save with char(key),idx(val) pair
    // if use map -> can immediately move left to idx+1 to remove duplicate quickly
// if it doesn't exist, expand the window
// if it does, shrink the window from the left until the duplicate is removed

// this way, every character is added and removed from the window at most once, -> O(N) time

var lengthOfLongestSubstring = function(s) {
    // initiate pointers: left and right to 0
    let left = 0, right = 0
    // create empty map
    const map = new Map();
    // initiate output = 0
    let output = 0;

    // for right to s.length
    for (let right = 0; right < s.length; right++) {
        const nextChar = s[right];
        // check if s[right] in map keys)
        // if not exist: 
        if (map.has(nextChar) && map.get(nextChar) >= left){
            // shrink window and update index of char
            left = map.get(nextChar) + 1
        }
        map.set(nextChar, right)

        // update output
        const range = right - left + 1
        output = Math.max(output, range)
    }
    return output

};