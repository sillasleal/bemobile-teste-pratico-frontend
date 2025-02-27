import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('formats dates correctly', () => {
    expect(formatDate('2020-01-01T06:00:00.000Z')).toBe('01/01/2020');
    expect(formatDate('1999-12-31T06:00:00.000Z')).toBe('31/12/1999');
  });
});
