/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0;
    let right = matrix.length * matrix[0].length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const [midRow, midCol] = getPosition(mid, matrix[0].length);
        const midNum = matrix[midRow][midCol];

        if (midNum === target)
            return true
        else if (midNum < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return false;
};

const getPosition = (num,rowSize) => {
    // return [rowIdx, colIdx]
    return [Math.floor(num/rowSize), num % rowSize]
}