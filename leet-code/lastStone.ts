// class MinHeap {
//     constructor(data = new Array()) {
//         this.data = data;
//         this.compareVal = (a, b) => a - b;
//         this.heapify();
//     }

//     heapify() {
//         if (this.size() < 2) {
//             return;
//         }
//         for (let i = 1; i < this.size(); i++) {
//             this.percolateUp(i);
//         }
//     }

//     peek() {
//         if (this.size() === 0) {
//             return null;
//         }
//         return this.data[0];
//     }

//     push(value) {
//         this.data.push(value);
//         this.percolateUp(this.size() - 1);
//     }

//     pop() {
//         if (this.size() === 0) {
//             return null;
//         }
//         const result = this.data[0];
//         const last = this.data.pop();
//         if (this.size() !== 0) {
//             this.data[0] = last;
//             this.percolateDown(0);
//         }
//         return result;
//     }

//     percolateUp(index) {
//         while (index > 0) {
//             const parentIndex = (index - 1) >> 1;
//             if (
//                 this.compareVal(
//                     this.data[index],
//                     this.data[parentIndex]
//                 ) < 0
//             ) {
//                 this.swap(index, parentIndex);
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     percolateDown(index) {
//         const lastIndex = this.size() - 1;
//         while (true) {
//             const leftIndex = index * 2 + 1;
//             const rightIndex = index * 2 + 2;
//             let findIndex = index;

//             if (
//                 leftIndex <= lastIndex &&
//                 this.compareVal(
//                     this.data[leftIndex],
//                     this.data[findIndex]
//                 ) < 0
//             ) {
//                 findIndex = leftIndex;
//             }

//             if (
//                 rightIndex <= lastIndex &&
//                 this.compareVal(
//                     this.data[rightIndex],
//                     this.data[findIndex]
//                 ) < 0
//             ) {
//                 findIndex = rightIndex;
//             }

//             if (index !== findIndex) {
//                 this.swap(index, findIndex);
//                 index = findIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     swap(index1, index2) {
//         [this.data[index1], this.data[index2]] = [
//             this.data[index2],
//             this.data[index1],
//         ];
//     }

//     size() {
//         return this.data.length;
//     }
// }

// class MaxHeap {
//     constructor(data = new Array()) {
//         this.data = data;
//         this.compareVal = (a, b) => b - a;
//         this.heapify();
//     }

//     heapify() {
//         if (this.size() < 2) {
//             return;
//         }
//         for (let i = 1; i < this.size(); i++) {
//             this.percolateUp(i);
//         }
//     }

//     peek() {
//         if (this.size() === 0) {
//             return null;
//         }
//         return this.data[0];
//     }

//     push(value) {
//         this.data.push(value);
//         this.percolateUp(this.size() - 1);
//     }

//     pop() {
//         if (this.size() === 0) {
//             return null;
//         }
//         const result = this.data[0];
//         const last = this.data.pop();
//         if (this.size() !== 0) {
//             this.data[0] = last;
//             this.percolateDown(0);
//         }
//         return result;
//     }

//     percolateUp(index) {
//         while (index > 0) {
//             const parentIndex = (index - 1) >> 1;
//             if (
//                 this.compareVal(
//                     this.data[index],
//                     this.data[parentIndex]
//                 ) < 0
//             ) {
//                 this.swap(index, parentIndex);
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     percolateDown(index) {
//         const lastIndex = this.size() - 1;
//         while (true) {
//             const leftIndex = index * 2 + 1;
//             const rightIndex = index * 2 + 2;
//             let findIndex = index;

//             if (
//                 leftIndex <= lastIndex &&
//                 this.compareVal(
//                     this.data[leftIndex],
//                     this.data[findIndex]
//                 ) < 0
//             ) {
//                 findIndex = leftIndex;
//             }

//             if (
//                 rightIndex <= lastIndex &&
//                 this.compareVal(
//                     this.data[rightIndex],
//                     this.data[findIndex]
//                 ) < 0
//             ) {
//                 findIndex = rightIndex;
//             }

//             if (index !== findIndex) {
//                 this.swap(index, findIndex);
//                 index = findIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     swap(index1, index2) {
//         [this.data[index1], this.data[index2]] = [
//             this.data[index2],
//             this.data[index1],
//         ];
//     }

//     size() {
//         return this.data.length;
//     }
// }
function lastStoneWeight(stones) {
    class MinHeap {
    constructor(data = new Array()) {
        this.data = data;
        this.compareVal = (a, b) => a - b;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) {
            return;
        }
        for (let i = 1; i < this.size(); i++) {
            this.percolateUp(i);
        }
    }

    peek() {
        if (this.size() === 0) {
            return null;
        }
        return this.data[0];
    }

    push(value) {
        this.data.push(value);
        this.percolateUp(this.size() - 1);
    }

    pop() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.percolateDown(0);
        }
        return result;
    }

    percolateUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (
                this.compareVal(
                    this.data[index],
                    this.data[parentIndex]
                ) < 0
            ) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    percolateDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;

            if (
                leftIndex <= lastIndex &&
                this.compareVal(
                    this.data[leftIndex],
                    this.data[findIndex]
                ) < 0
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(
                    this.data[rightIndex],
                    this.data[findIndex]
                ) < 0
            ) {
                findIndex = rightIndex;
            }

            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }

    size() {
        return this.data.length;
    }
}

class MaxHeap {
    constructor(data = new Array()) {
        this.data = data;
        this.compareVal = (a, b) => b - a;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) {
            return;
        }
        for (let i = 1; i < this.size(); i++) {
            this.percolateUp(i);
        }
    }

    peek() {
        if (this.size() === 0) {
            return null;
        }
        return this.data[0];
    }

    push(value) {
        this.data.push(value);
        this.percolateUp(this.size() - 1);
    }

    pop() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.percolateDown(0);
        }
        return result;
    }

    percolateUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (
                this.compareVal(
                    this.data[index],
                    this.data[parentIndex]
                ) < 0
            ) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    percolateDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;

            if (
                leftIndex <= lastIndex &&
                this.compareVal(
                    this.data[leftIndex],
                    this.data[findIndex]
                ) < 0
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(
                    this.data[rightIndex],
                    this.data[findIndex]
                ) < 0
            ) {
                findIndex = rightIndex;
            }

            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }

    size() {
        return this.data.length;
    }
}

    function playGame(heap) {
        const largest = heap.pop()
        const secondLargest = heap.pop()
        
        if(largest !== secondLargest) {
            const newStone = largest - secondLargest
            heap.push(newStone)
        }
    }
    
    const maxHeap = new MaxHeap(stones)
    
    while(maxHeap.size() > 1) {
        console.log('maxHeap', maxHeap.data)
        playGame(maxHeap)
    }
    
    return maxHeap.peek() || 0
};