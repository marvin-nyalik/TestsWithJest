const capitalize = require('./capitalize');

describe ('Working with capitalize tests ...', () => {
    test('Capitalize..', () => {
        expect(capitalize('marvin')).toBe('Marvin');
      });
      
    test('Unexpected Input..', () => {
          expect(() => capitalize(1234)).toThrow('Input should be a string');
      });
});
