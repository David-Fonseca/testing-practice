import analyzeArray from "./analyzeArray";

test('analyzeArray works', ()=>{
    expect(analyzeArray([1,2,3,4,5,6])).toEqual({average: 3.5, min: 1, max: 6, arrayLength:6})
})