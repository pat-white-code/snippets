function isSubsequence(s: string, t: string): boolean {
    let i = 0; // s
    let j = 0; // t

    while(j < t.length && i < s.length) {
        if(s[i] === t[j]) {
            i++
            j++
        } else {
            j++
        }
    }

    return i === s.length
};