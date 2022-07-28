const capitalize = require('./capitalize');

test('takes a string and returns the first character capitalized', () => {
  expect(capitalize('programming')).toBe('Programming');
});
