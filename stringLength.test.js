const stringLength = require('./stringLength');
//arrange
//act $ assert
test('Marvin must be 6', () => {
  expect(stringLength('Marvin')).toBe(6);
});

test ('Where length is exceeded', () => {
    expect (() => stringLength('')).toThrow('String length validation error');
})