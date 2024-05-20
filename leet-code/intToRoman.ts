function intToRoman(num: number): string {
    let roman = ''

    const numeralMatrix =
        [
            [],
            [null, 'I', 'X', 'C', 'M'],
            [null, 'II', 'XX', 'CC', 'MM'],
            [null, 'III', 'XXX', 'CCC', 'MMM'],
            [null, 'IV', 'XL', 'CD'],
            [null, 'V', 'L', 'D'],
            [null, 'VI', 'LX', 'DC'],
            [null, 'VII', 'LXX', 'DCC'],
            [null, 'VIII', 'LXXX', 'DCCC'],
            [null, 'IX', 'XC', 'CM']
        ]

    const getRoman = (num: number) => {
        let numString = num.toString()
        let firstInt = numString[0]
        let numLength = numString.length
        const int = parseInt(firstInt) * Math.pow(10, numLength - 1)
        const numeral = numeralMatrix[firstInt][numLength]
        return [int, numeral]
    }
    while (num > 0) {
        const [int, numeral] = getRoman(num)
        num -= int
        roman += numeral
    }

    return roman

}