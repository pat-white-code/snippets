class KthLargest {
    heap: (number)[]
    k: number

    constructor(k: number, nums: number[]) {
        nums = nums.sort((a: number, b: number) => a - b)
        this.heap = [-Infinity, ...nums]
        this.k = k
    }

    add(val: number): number {
        if(this.heap.length === 2) {
            return this.heap.pop()!
        }

        // add to end of heap
        this.heap.push(val)

        // init i at end of array
        let i = this.heap.length
        let parent = i / 2

        while (i > 1) {
            if (this.heap[i] < this.heap[parent]) {
                //swap
                let temp = this.heap[i]
                this.heap[i] = this.heap[parent]
                this.heap[parent] = temp
                //repeat
                i = parent
            }
        }
        return this.heap[this.heap.length - this.k]
    }
}