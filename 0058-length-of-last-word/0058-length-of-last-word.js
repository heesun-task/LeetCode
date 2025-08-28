/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trim();
    let ptr = str.length - 1;
    let len = 0;


    while (str[ptr] !== " " && ptr >= 0) {
        ptr--;
        len++;
    }

    return len;
};