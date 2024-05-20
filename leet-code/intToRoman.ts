function intToRoman(num: number): string {
    // while num > 0
    // does the number start with 4?
    while (num > 0) {
        let function intToRoman(num: number): string {
    // while num > 0
    // does the number start with 4?
    while(num > 0) {
        let numString = num.toString()
        let numLength = numString.length
        let firstInt = numString[0]
        let int = parseInt(numString[0]) * 10 ^ numString.length
        while(int > 0) {
            let roman = ''
            if(firstInt === '4' || firstInt === '9' ) {
                if(numLength === 1) {
                    return firstInt === '4' ? 'IV' : 'IX'
                }
                if(numLength === 2) {
                    return firstInt === '4' ? 'XL' : 'XC'
                }
                if(numLength === 3) {
                    return firstInt === '4' ? 'CD' : 'CM'
                }
            }
        }
        
        while(int > 0) {
            if(num >= 1000) {
                output += 'M'
                int =- 1000
        }
        if(num >= 500) {
            output += 'D'
                int =- 500
        }
        if(num >= 100) {
            output += 'C'
                int =- 100
        }
        if(num >=50) {
            output += 'L'
                int =- 500
        }
        if(num >=10) {
            return 'X'
            output += 'X'
                int =- 10
        }
        if(num >= 5) {
            output += 'V'
                int =- 5
        }
        if(num >=) {
           output += 'I'
                int =- 1
         }
        }
        
};
}
        let numString = num.toString()
        let numLength = numString.length
        let firstInt = numString[0]
        let int = parseInt(numString[0]) * 10 ^ numString.length

        if (firstInt === '4' || firstInt === '9') {
            if (numLength === 1) {
                return firstInt === '4' ? 'IV' : 'IX'
            }
            if (numLength === 2) {
                return firstInt === '4' ? 'XL' : 'XC'
            }
            if (numLength === 3) {
                return firstInt === '4' ? 'CD' : 'CM'
            }
        }

        while (int > 0) {
            if (num >= 1000) {
                output += 'M'
                int = - 1000
            }
            if (num >= 500) {
                output += 'D'
                int = - 500
            }
            if (num >= 100) {
                output += 'C'
                int = - 100
            }
            if (num >= 50) {
                output += 'L'
                int = - 500
            }
            if (num >= 10) {
                return 'X'
                output += 'X'
                int = - 10
            }
            if (num >= 5) {
                output += 'V'
                int = - 5
            }
            if (num >=) {
                output += 'I'
                int = - 1
            }
        }

    };
}