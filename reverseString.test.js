const reverser = require('./reverseString');

test('Calling reverser ...', () => {
    expect(reverser('ba')).toBe('ab');
});
