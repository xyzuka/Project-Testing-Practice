const caesarCipher = require('./caesarCipher');

test('tests wrapping from z to a', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
    'bcdefghijklmnopqrstuvwxyza'
  );
});

test('test keeping the same case', () => {
  expect(caesarCipher('ABCDE', 1)).toBe('BCDEF');
});

test('testing punctuation', () => {
  expect(caesarCipher('abcde!fghijklmnopqrstuvwxyz.', 1)).toBe(
    'bcdef!ghijklmnopqrstuvwxyza.'
  );
});
