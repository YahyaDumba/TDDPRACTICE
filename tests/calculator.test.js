const add = require('../stringCalculator')
test('should return 0 for empty string',()=>{
    expect(add('')).toBe(0);
} )

test('should return single number for single number',()=>{
    expect(add('1')).toBe(1);
})

test('should return sum of two numbers',()=>{
    expect(add('1,2')).toBe(3);
});

test('should handle multiple numbers',()=>{
    expect(add('1,2,3,4,5')).toBe(15);
})

test('should handle newline delimeters',()=>{
    expect(add('1\n2,3')).toBe(6);
})
