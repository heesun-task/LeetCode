/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 // odds in [low, high] = odds(0...high) - odds(0...low-1)
 // odds(0..n) = floor((n+1)/2)
var countOdds = function(low, high) {
    return Math.floor((high+1)/2) - Math.floor((low)/2);
};