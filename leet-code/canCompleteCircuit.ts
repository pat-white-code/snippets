function canCompleteCircuit(gas: number[], cost: number[]): number {
    // if less gas than cost, return -1
    const totalGas = gas.reduce((a, b) => a + b, 0)
    const totalCost = cost.reduce((a, b) => a + b, 0)

    if (totalCost > totalGas) {
        return -1
    }

    let total = 0
    let start = 0

    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i]

        if (total < 0) {
            total = 0
            start = i + 1
        }
    }
    return start
};