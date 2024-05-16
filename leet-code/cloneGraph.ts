class GraphNode {
    val: number
    neighbors: GraphNode[]
    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
    if (!node) {
        return null
    }

    const queue: GraphNode[] = [node]

    // track cloned nodes by their value
    const clones = {}

    while (queue.length) {
        const node: GraphNode = queue.shift()!
        if (!clones[node.val]) {
            clones[node.val] = new GraphNode(node.val)
        }

        const neighbors = node.neighbors

        // for each neighbor, register clone and add to queue
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i]
            // if original node hasn't been cloned yet, make clone, register, and add original node in queue to build connections
            if (!clones[neighbor.val]) {
                clones[neighbor.val] = new GraphNode(neighbor.val)
                queue.push(neighbor)
            }

            clones[node.val].neighbors.push(clones[neighbor.val])

        }
    }

    return clones[node.val]
};