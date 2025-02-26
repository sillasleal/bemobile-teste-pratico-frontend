import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('formats dates correctly', () => {
    expect(formatDate('2020-01-01')).toBe('01/01/2020');
    expect(formatDate('1999-12-31')).toBe('31/12/1999');
  });
});
