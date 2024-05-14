interface ListNode {
    val: number
    next: ListNode | null
}

class MyLinkedList {
    head: ListNode | null
    constructor(val: number) {
        if (val) {
            const node = {
                val,
                next: null
            } as ListNode
            this.head = node
        }
    }

    get(index: number): number | undefined {
        let i = 0
        let current = this.head as ListNode | null

        //find index
        while (i <= index && current) {
            if (i === index) {
                return current.val
            }
            i++
            current = current.next
        }

        // if index does not exist in list
        return undefined
    }

    addAtHead(val: number): void {
        let node = {
            val,
            next: this.head
        }
        this.head = node
    }

    addAtTail(val: number): void {
        //create new node
        const node = {
            val,
            next: null
        }

        // init current
        let current = this.head

        if(!current) {
            this.head = node
            return
        }

        //find tail
        while (current.next) {
            current = current.next
        }

        //add to tail
        current.next = node
    }

    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            this.addAtHead(val)
        }

        // find Prev
        let i = 0
        let currentNode = this.head as ListNode | null
        let prev = null as ListNode | null

        while (i < index && currentNode) {
            if (i === index - 1) {
                prev = currentNode
                break;
            } else {
                i++
                currentNode = currentNode.next
            }
        }

        let next = prev!.next

        let current = {
            val,
            next
        }

        prev!.next = current
    }

    deleteAtIndex(index: number): void {
        if(this.head) {
            if(index === 0) {
                this.head = this.head.next
                return
            }
    
            // find Prev
            let i = 0
            let current = this.head as ListNode | null
            let prev = null as ListNode | null
    
            while (i < index && current) {
                if (i === index - 1) {
                    prev = current
                    break
                } else {
                    i++
                    current = current.next
                }
            }
    
            if(prev && prev.next) {
                prev.next = prev.next.next
            }
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */