function canJump(nums: number[]): boolean {
    const queue = [0]
    const visited = new Set()
    visited.add(0)
    
    while(queue.length) {
        const index = queue.pop()
        
        if(index === nums.length - 1) {
            return true
        }
        
        const value = nums[index]
        for(let i = 1; i <= value; i++) {
            const neighborIndex = index + i
            if(!visited.has(neighborIndex)) {
                visited.add(neighborIndex)
                queue.push(neighborIndex)
            }
        }
    }
    return false
};