import { formatPhoneNumber } from './formatPhoneNumber';

describe('formatPhoneNumber', () => {
  it('formats phone numbers correctly', () => {
    expect(formatPhoneNumber('123456789012')).toBe('+12 (34) 56789-012');
    expect(formatPhoneNumber('987654321098')).toBe('+98 (76) 54321-098');
  });
});
