const lib = require('../lib');

test('Our absolute - should return a positive number if input is positive', () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});
