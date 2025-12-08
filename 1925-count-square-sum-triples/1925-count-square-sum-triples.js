/**
 * @param {number} n
 * @return {number}
 */

var countTriples = function(n) {
    if (n < 5) return 0;
    const sq = new Set(Array.from({length:n}, (_, i) => (i+1) ** 2)); 
    let cnt = 0;

    for (let i = 1; i < n; i++) {
        const a2 = a * a;
        for (let j = i+1; j < n; j++) {
            const b2 = b * b;
            // If a^2 + b^2 is a perfect square c^2 (where c <= n),
            // then both (a, b, c) and (b, a, c) count as valid triples.
            if (sq.has(a2 + b2)) cnt+=2; 
        }
    }
    return cnt;
};