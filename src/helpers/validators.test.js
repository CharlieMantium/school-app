import { validateDot, validatePositive } from './validators';

describe('validator', () => {
  it('should return true if input string dont contain dot', () => {
    const input = '12345';
    const output = validateDot(input);
    expect(output).toBe(true);
  });

  it('should return false if input string contain dot', () => {
    const input = '123.45';
    const output = validateDot(input);
    expect(output).toBe(false);
  });

  it('should return true if input is positive', () => {
    const input = '12345';
    const output = validatePositive(input);
    expect(output).toBe(true);
  });

  it('should return false if input is negative', () => {
    const input = '-12345';
    const output = validatePositive(input);
    expect(output).toBe(false);
  });
});
