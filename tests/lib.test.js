const lib = require('../lib');

describe('absolute', () => {
  it(' should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it(' should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it(' should return 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Rashad');
    expect(result).toMatch(/Rashad/);
    expect(result).toContain('Rashad');
  });
});

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));

    expect(result).toContain('USD', 'AUD', 'EUR');
  });
});
