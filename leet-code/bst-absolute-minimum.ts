
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
    let minDiff: number | null = Infinity

    let i: number = 0
    while(i < nodesArray.length) {
        let current = nodesArray[i]
        let prev = nodesArray[i - 1]
        if (prev !== undefined) {
            minDiff = Math.min(minDiff, Math.abs(prev - current))
        }
        i++
    }

    return minDiff
};