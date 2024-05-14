function maxProfit(prices: number[]): number {
    let maxProfit = 0
    let buyPrice: number|null = null
    let currentProfit = 0

    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i]

        if (buyPrice === null) {
            buyPrice = currentPrice
        }

        if (currentPrice < buyPrice) {
            buyPrice = currentPrice
        }

        currentProfit = currentPrice - buyPrice

        maxProfit = Math.max(currentProfit, maxProfit)
    }

    return maxProfit
};