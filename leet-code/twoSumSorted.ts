function twoSum(numbers: number[], target: number): number[] {
    // compliment of Large is smaller than S => dec L
    // compliment of Large is bigger than S => inc S
    // S and L can never overlap
    let S = 0
    let L = numbers.length - 1
    while (S < L) {
        let compliment = target - numbers[L]

        // success
        if (numbers[S] === compliment) {
            return [S + 1, L + 1]
        }

        if (numbers[S] > compliment) {
            // dec L
            L--
        } else {
            //inc S
            S++
        }
    }
    return [- 1, -1]
};