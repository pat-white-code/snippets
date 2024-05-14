// const swap = (index1: number, index2: number, array: number[]) => {
//     //mutate array
//     let temp = array[index1]
//     array[index1] = array[index2]
//     array[index2] = temp
// }

function findKthLargest(nums: number[], k: number): number {
    // [3,2,1,5,6,4]

    const add = (heap: number[], val: number): number[] => {
//                                i
        // heap = [null, 3, 5, 1, 2]
        // val = 5
        // push to end of heap
        heap.push(val)

        // percolate up
        let i = heap.length - 1 //4
        let parent = Math.floor(i / 2) //2

        // heap[4] > heap[2]
        //i = 2
        //parent = 1
        while (i > 1 && heap[i] > heap[parent]) {
            swap(i, parent, heap)
            // let temp = heap[parent]
            // heap[parent] = heap[i]
            // heap[i] = heap[parent]
            i = parent
            parent = Math.floor(i / 2)
        }

        return heap
    }

    const remove = (heap: number[]): number => {
        // if heap.length === 1, return undefined
        if (heap.length <= 1) {
            return -Infinity
        }

        if (heap.length === 2) {
            return heap.pop()!
        }

        const removed = heap[1]
        // console.log('removed', removed)

        //remove end of heap and place at start
        heap[1] = heap.pop()!
        // console.log('heap', heap)

        // percolate down from top of heap
        let i = 1
        let leftChild = i * 2
        let rightChild = i * 2 + 1

        let leftChildValue = heap[leftChild] || -Infinity
        let rightChildValue = heap[rightChild] || -Infinity

        while (heap[i] < leftChildValue || heap[i] < rightChildValue) {
            // if left is bigger
            if (leftChildValue > rightChildValue) {

                //swap left
                swap(i, leftChild, heap)

                //reassign i
                i = leftChild
            } else {
                // swap right
                swap(i, rightChild, heap)

                // reassign i
                i = rightChild
            }

            // reassign children
            leftChild = i * 2
            rightChild = i * 2 + 1
            leftChildValue = heap[leftChild] || -Infinity
            rightChildValue = heap[rightChild] || -Infinity
        }

        return removed
    }
    // init output
    let output: number

    //init heap
    let heap = [null]

    //build the heap
    nums.forEach((val: number) => {
        // console.log(heap, 'heap')
        heap = add(heap, val)
    })

    let i = 0
    while (i < k) {
        output = remove(heap)
        console.log('heap', heap)
        i++
    }

    return output
};