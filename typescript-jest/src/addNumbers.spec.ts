import addNumbers from './addNumber'

test('should add two numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5)
    expect(addNumbers(10, 3)).toBe(13)
})