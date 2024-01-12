import { isPalindrome } from "./palindrome";

test('should return true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true)
    expect(isPalindrome("Madam")).toBe(true)
    expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true)
    expect(isPalindrome("$#malayalam#$")).toBe(true)
})

test('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello world')).toBe(false)
    expect(isPalindrome('TypeScript')).toBe(false)
})

test("should handle empty strings", () => {
    expect(isPalindrome("")).toBe(true)
})