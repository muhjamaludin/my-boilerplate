export function isPalindrome(str: string): boolean {
    const strToLower = str.toLowerCase()
    const strClearMetaChar = strToLower.match(/\w/g)?.join("")
    return strClearMetaChar == strClearMetaChar?.split("").reverse().join("")
}
