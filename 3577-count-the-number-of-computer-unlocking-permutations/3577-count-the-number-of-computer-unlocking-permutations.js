const MOD = 1_000_000_007;
    
/**
 * @param {number[]} complexity
 * @return {number}
 */
 // int, j < i, complexity[j] < complexity[i]
 // find the # of permutations where all elems exept 1st has prior lower number
 // The order of 1st # is fixed

 // To match,
 // complexity[0] should be the smallest among all -> otherwise ans = 0.
 // Then, other cases all matches.
 // Therefore, valid permutations are (n-1)!
var countPermutations = function(complexity) {
    let res = 0;
    const cpxLen = complexity.length;
    const fstCpx = complexity[0];

    for (let i = 1; i < cpxLen; i++) {
        if (complexity[i] <= fstCpx) return 0;
    }

    res = factorial(cpxLen - 1);

    return res; 
};

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = (result * i) % MOD;
  }
  return result;
}
