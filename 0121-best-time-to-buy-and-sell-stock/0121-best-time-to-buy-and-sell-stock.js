/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let p of prices) {
        if (p < minPrice) minPrice = p;     
        const profit = p - minPrice;   
        if (profit > maxProfit) maxProfit = profit;
    }
    return maxProfit;
    
};