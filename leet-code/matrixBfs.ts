
function shortestPathBinaryMatrix(grid: number[][]): number {
    if (grid[0][0] === 1) {
        return -1
    }

    const isValidCoord = ([R, C]: number[], grid: number[][]) => grid[R]?.[C] !== undefined

    const getCoord = ([R, C]: number[], [dR, dC]: number[]): number[] => [R + dR, C + dC]
    const getCell = ([R, C]: number[], grid: number[][]) => grid[R][C]

    const checkedGrid = grid.map(row => row.map(cell => -1))

    // register cell
    checkedGrid[0][0] = 1

    // init queue with top left node
    const q = [[0, 0, 1]]

    // bfs
    while (q.length) {
        const [R, C, currentCount] = q.shift()!
        if (R === grid.length - 1 && C === grid[R].length - 1) {
            return currentCount
        }
        const neighborDiffs = [[1, 1], [1, 0], [0, 1], [-1, -1], [-1, 0], [-1, 1], [0, -1], [1, -1]]

        neighborDiffs.forEach((diff: number[]) => {

            const neighborCoord = getCoord([R, C], diff)
            const isValid = isValidCoord(neighborCoord, grid)
            const isNotChecked = isValid && getCell(neighborCoord, checkedGrid) === -1
            const isClear = isValid && getCell(neighborCoord, grid) === 0

            if (isNotChecked && isClear) {
                // register coord
                checkedGrid[neighborCoord[0]][neighborCoord[1]] = 1

                // add neighbor coords to q
                q.push([neighborCoord[0], neighborCoord[1], currentCount + 1])
            }
        })
    }

    return -1
};