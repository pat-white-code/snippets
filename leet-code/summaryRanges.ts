const getRange = (startRange: number, endRange: number): string => endRange !== startRange ? `${startRange}->${endRange}` : `${startRange}`

function summaryRanges(nums: number[]): string[] {
    if(!nums.length) {
        return []
    }
    
    let output: string[] = []
    let startRange = nums[0]
    let endRange = nums[0]
    
    //iterate through the numbers
    for(let i = 1; i < nums.length; i++) {
        let previous = nums[i - 1]
        const current = nums[i]
        let expected = previous + 1
        if (current === expected) {
            //reset endRange
            endRange = current
        } else {
            // terminate current Range
            const range = getRange(startRange, endRange)
            output.push(range)
            
            //reset ranges
            startRange = current
            endRange = current
        }
    }

    // terminate trailing range
    const range = getRange(startRange, endRange)
    output.push(range)
    return output
};