import caesarCipher from "./caesarCipher";

test('shift works',()=>{
    expect(caesarCipher('hello', 2)).toBe('jgnnq')
})

test('shift works',()=>{
    expect(caesarCipher('zzzz', 2)).toBe('bbbb')
})

test('shift works',()=>{
    expect(caesarCipher('aaaa', -2)).toBe('yyyy')
})