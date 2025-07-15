/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to store opening brackets
    const stack = [];

    // Mapping of closing -> opening brackets
    const maps = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const openings = Object.values(maps)

    // Iterate through each character in the string
    for (const char of s) {
        // If it's an opening bracket, push to stack
        if (openings.includes(char)) {
            stack.push(char);

        // If it's a closing bracket
        } else {
            // If stack is empty or doesn't match expected opening, return false
            // if (stack[stack.length - 1] === maps[char]) {
            //     stack.pop();
            // } else {
            //     return false;
            // }
            if (stack.pop() !== maps[char]) return false;

        }
    }
    
    // return bool if stack is empty
    return stack.length === 0    
};