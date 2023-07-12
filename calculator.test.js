import calculator from "./calculator";

test('add adds',()=>{
    expect(calculator.add(1,2)).toEqual(3);
})

test('sub subs',()=>{
    expect(calculator.subtract(1,2)).toEqual(-1);
})

test('multiply multiplies',()=>{
    expect(calculator.multiply(14,2)).toEqual(28);
})

test('divide divides',()=>{
    expect(calculator.divide(30,10)).toEqual(3);
})
