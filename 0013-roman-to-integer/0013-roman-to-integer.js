/**
 * @param {string} s
 * @return {number}
 */
 // special case: 
 // 4 = IV (not IIII)
 // 9 = IX 
var romanToInt = function(s) {
    let result = 0;
    let dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    for (let i=0; i < s.length; i++) {
        const curr = s[i];
        const next = i + 1 < s.length ? s[i + 1] : null;

        // handle special cases
        if (next && dict[curr] < dict[next]) {
            result += dict[next] - dict[curr];
            i++;          
            continue;
        }

        result += dict[curr];
    }

    return result;
    
};