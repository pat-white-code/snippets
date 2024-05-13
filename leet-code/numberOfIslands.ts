
function numIslands(grid: string[][]): number {
    
    // tracks output
    const islands = [] as boolean[]

    // tracks checked nodes
    const exploredGrid: boolean[][] = grid.map((row: string[]): boolean[] => row.map((node: string): boolean => false))
    
    // returns true if island, else false
    // updates exploredGrid
    const getIsland = (coord: number[]): boolean => {
        // requires grid, exploredGid from scope
        const queue = [coord]
        const island = [] as number[][]
        
        while(queue.length) {
        // pop coord off queue
            const coord = queue.shift()
            if (!coord) {
                break
            }

            const [r, c] = coord
            
            // add to exploredNodes
            exploredGrid[r][c] = true
            
            // if land, 
            if(grid[r][c] === "1") {
                // add to island
                island.push(coord)
                
                //get neighbors
                const north = [r - 1, c]
                const east = [r, c + 1]
                const south = [r + 1, c]
                const west = [r, c - 1]
                
                const neighbors = [north, east, south, west]

                neighbors.forEach(([r, c]: number[]) => {

                    // if neighbor is valid and unchecked
                    if(grid[r][c] && !exploredGrid[r][c]) {
                        queue.push([r, c])
                    }
                })
            }
        //if water do nothing
        }
        return !!island.length
    }

    // iterate over grid
    for(let r = 0; r < grid.length; r++) {
        const row = grid[r]
        for(let c = 0; c < row.length; c++) {

            //if node not checked, check node
            if(!exploredGrid[r][c]) {
                const island = getIsland([r, c]) //updates exploredGrid
                if(island) {
                    islands.push(island)
                }
            }
        }
    }
    
    return islands.length
};