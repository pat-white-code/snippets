function removeDuplicates(nums: number[]): number {
    const swap = (index1: number, index2: number, array: number[]): void => {
        let temp = array[index1]
        array[index1] = array[index2]
        array[index2] = temp
    }

    const swapToEnd = (swapIndex: number, endIndex: number, array: number[]): void => {
        while(swapIndex < endIndex) {
            swap(swapIndex, swapIndex + 1, array)
            swapIndex++
        }
    }

    let previous: number | null = null

    let i = 0
    let k = nums.length - 1

    while(i <= k) {
        if(nums[i] === previous) {
            nums[i] = Infinity
            i++
            // swapToEnd(i, k, nums)
            k--
        } else {
            previous = nums[i]
            // i++
        }
    }

    nums = nums.sort((a, b) => a - b)
    return previous!
};