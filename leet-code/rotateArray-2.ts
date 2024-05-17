/**
 Do not return anything, modify nums in-place instead.
 */

const rotateLeft = (arr: number[]) => {
    let removed = arr.shift()!
    arr.push(removed)
}

const rotateRight = (arr: number[]) => {
    let removed = arr.pop()!
    arr.unshift(removed)
}

function rotate(nums: number[], k: number): void {
    if (k > nums.length) {
        k = k % nums.length
    }

    if (k === 0 || k === nums.length) {
        return
    }

    if (k > Math.floor(nums.length / 2)) {
        let numberOfRotations = nums.length - k
        let i = 0
        while (i < numberOfRotations) {
            rotateLeft(nums)
            i++
        }
    } else {
        let i = 0
        while (i < k) {
            rotateRight(nums)
            i++
        }
    }
}; 