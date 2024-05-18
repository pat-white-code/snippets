class TrieNode {
    children: Record<string, TrieNode>
    word: boolean
    constructor() {
        this.children = {}
        this.word = false
    }
}

class Trie {
    head: TrieNode
    constructor() {
        this.head = new TrieNode()
    }

    insert(word: string): void {
        let node = this.head

        for (let i = 0; i < word.length; i++) {
            let prefix = word[i]

            if (!node.children[prefix]) {
                node.children[prefix] = new TrieNode()
            }

            node = node.children[prefix]
        }

        node.word = true
    }

    search(word: string): boolean {
        let node = this.head

        for (let i = 0; i < word.length; i++) {
            let prefix = word[i]
            if (!node.children[prefix]) {
                return false
            }
            node = node.children[prefix]
        }
        return node.word
    }

    startsWith(prefix: string): boolean {
        let node = this.head

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i]
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }

        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */