const calculator = require('./calculator');

describe('The Calculator ...', () => {

    test('Calculator add', () => {
        expect(calculator.add(1,2)).toBe(3);
    });
    test('Calculator divide', () => {
        expect(calculator.divide(2,1)).toBe(2);
    });
    test('Calculator subtract', () => {
        expect(calculator.subtract(2,2)).toBe(0);
    });
    test('Calculator multiply', () => {
        expect(calculator.multiply(1,2)).toBe(2);
    });

});