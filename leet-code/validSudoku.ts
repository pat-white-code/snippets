const getQuad = (R, C) => {
    return `${Math.floor(R / 3)},${Math.floor(C / 3)}`
}

function isValidSudoku(board: string[][]): boolean {
    const rowCache = {}
    const colCache = {}
    const quadCache = {}

    for (let R = 0; R < board.length; R++) {
        for (let C = 0; C < board[0].length; C++) {
            const cellValue = board[R][C]

            if (cellValue !== '.') {
                if (rowCache[R]?.[cellValue] !== undefined) {
                    return false
                }
                if (!rowCache[R]) {
                    rowCache[R] = {}
                }
                rowCache[R][cellValue] = true

                if (colCache[C]?.[cellValue] !== undefined) {
                    return false
                }
                if (!colCache[C]) {
                    colCache[C] = {}
                }

                colCache[C][cellValue] = true

                const quad = getQuad(R, C)
                if (quadCache[quad]?.[cellValue] !== undefined) {
                    return false
                }
                if (!quadCache[quad]) {
                    quadCache[quad] = {}
                }
                quadCache[quad][cellValue] = true
            }
        }
    }
    return true
}