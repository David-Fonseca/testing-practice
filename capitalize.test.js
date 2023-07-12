import capitalize from "./capitalize"

test('capitalizes first letter in input string', () => {

    expect(capitalize('hi there')).toBe('Hi there')
})

test('does nothing if its a string of numbers', () => {

    expect(capitalize('32')).toBe('32')
})

test('if input isnt a string, function throws an error', () => {

    expect(()=>capitalize(32)).toThrow(Error)
})