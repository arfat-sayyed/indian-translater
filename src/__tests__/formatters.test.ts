import { IndianFormatters } from '../formatters';

describe('IndianFormatters', () => {
  describe('formatNumber', () => {
    test('formats numbers in Indian system', () => {
      expect(IndianFormatters.formatNumber(1234567)).toBe('12,34,567');
      expect(IndianFormatters.formatNumber(100000)).toBe('1,00,000');
    });
  });

  describe('formatCurrency', () => {
    test('formats currency with symbol', () => {
      expect(IndianFormatters.formatCurrency(1234567)).toBe('₹12,34,567.00');
    });

    test('formats currency without symbol', () => {
      expect(IndianFormatters.formatCurrency(1234567, { symbol: false })).toBe('12,34,567.00');
    });
  });

  describe('formatDate', () => {
    test('formats date in Indian format', () => {
      const date = new Date('2023-12-25');
      expect(IndianFormatters.formatDate(date)).toBe('25/12/2023');
    });
  });
});