/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let currMax = 0;
    for(let i = prices.length -1 ; i >=0 ; i--){
        currMax = Math.max(prices[i], currMax);
        res = Math.max(res, currMax - prices[i]);
    }

    return res;
};