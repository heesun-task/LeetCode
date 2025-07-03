function isPalindrome(s: string): boolean 
{
    // normalize string s
    let str:string = s.toLowerCase()
    str = str.replace(/[^0-9a-z]/g, "")

    // create two pointers 
    const strLen:number = str.length
    if (strLen === 0) return true
    let p1:number = 0
    let p2:number = strLen - 1

    // loop str until p1 over or same as p2
    // increasing p1 and decreasing p2
    while (p1 < p2) {
        if (str[p1++] !== str[p2--]) return false;
    }
    return true
    
    
}
