const reversed = require('./reversed');

test('takes a string and returns it reversed', () => {
  expect(reversed('software')).toBe('erawtfos');
});
