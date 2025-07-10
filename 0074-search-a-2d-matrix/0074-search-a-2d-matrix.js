/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function findNumInMatrix(targetIdx, numOfColumns, matrix) {
    let row, col; 
    // find row :(targetIdx / numOfColumns) // e.g.,5 / 4 -> 1.xxx  => 2nd row (1 index row)
    row = Math.floor(targetIdx / numOfColumns)

    // find col :(targetIdx % numOfColumns) //e.g., 1 % 4 -> 1 => col index = 1 
    col = (targetIdx % numOfColumns)

    // find num -> matrix[row,col]
    return matrix[row][col];
} 

var searchMatrix = function(matrix, target) {
    // two pointers left = 0 and right (m x n - 1)
    let left = 0;
    let right = matrix.length * matrix[0].length - 1;
    let numOfColumns = matrix[0].length;

    // iterate this until left over right 
    while (left <= right){
        // find the mid number
        let mid = Math.floor((left +  right) / 2)
        let midNum = findNumInMatrix(mid, numOfColumns, matrix)

        // midNum == target => return true
        if (midNum === target) return true

        // midNum > target => move right = mid - 1 
        else if (midNum > target) right = mid - 1 

        // midNum < target => move left = mid + 1
        else if (midNum < target) left = mid + 1 
    }

    // return false
    return false
    
};