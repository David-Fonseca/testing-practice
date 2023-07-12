import reverseString from "./reverseString";

test('string is reversed',()=>{
    expect(reverseString('hi there')).toBe('ereht ih');
});

test('throw error if input is not a string',()=>{
    expect(()=>{reverseString(d)}).toThrow(Error);
});