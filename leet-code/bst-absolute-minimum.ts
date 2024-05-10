
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function buildNodesArray(root: TreeNode | null, accum: number[]): number[] {
    if (!root) {
        return []
    }

    if (root.left) {
        accum = buildNodesArray(root.left, accum)
    }

    return [...accum, root.val, ...buildNodesArray(root.right, [])]
}

function getMinimumDifference(root: TreeNode | null): number | null {
    const nodesArray = buildNodesArray(root, [])
    console.log('nodesArray', nodesArray)
    let minDiff: number | null = null
    let prev: number | null = null

    for (let i = 0; i < nodesArray.length; i++) {
        let current = nodesArray[i]
        if (prev !== null && !minDiff) {
            minDiff = Math.abs(prev - current)
        } else if (prev !== null && minDiff) {
            let currentDiff = Math.abs(current - prev)
            minDiff = Math.min(minDiff, currentDiff)
        }
        prev = current
    }

    return minDiff
};