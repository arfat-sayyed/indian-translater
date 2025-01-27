import { IndianTranslator, IndianFormatters } from '../index';

describe('Indian Translator Library Integration Tests', () => {
  let translator: IndianTranslator;

  beforeEach(() => {
    translator = new IndianTranslator();
  });

  describe('Translation Features', () => {
    test('basic translations work', () => {
      // Test basic translations
      expect(translator.translate('hello', 'hi')).toBe('नमस्ते');
      expect(translator.translate('hello', 'mr')).toBe('नमस्कार');
      expect(translator.translate('hello', 'en')).toBe('hello');
    });

    test('business terms translations', () => {
      expect(translator.translate('customer', 'hi')).toBe('ग्राहक');
      expect(translator.translate('price', 'hi')).toBe('मूल्य');
      expect(translator.translate('price', 'mr')).toBe('किंमत');
    });

    test('case insensitivity', () => {
      expect(translator.translate('HELLO', 'hi')).toBe('नमस्ते');
      expect(translator.translate('Hello', 'mr')).toBe('नमस्कार');
    });
  });

  describe('Number Formatting', () => {
    test('formats Indian numbers correctly', () => {
      expect(IndianFormatters.formatNumber(1234567)).toBe('12,34,567');
      expect(IndianFormatters.formatNumber(1000000)).toBe('10,00,000');
      expect(IndianFormatters.formatNumber(10000000)).toBe('1,00,00,000');
    });

    test('handles small numbers', () => {
      expect(IndianFormatters.formatNumber(123)).toBe('123');
      expect(IndianFormatters.formatNumber(1234)).toBe('1,234');
    });
  });

  describe('Currency Formatting', () => {
    test('formats currency with symbol', () => {
      expect(IndianFormatters.formatCurrency(1234567)).toBe('₹12,34,567.00');
      expect(IndianFormatters.formatCurrency(1000000)).toBe('₹10,00,000.00');
    });

    test('formats currency without symbol', () => {
      expect(IndianFormatters.formatCurrency(1234567, { symbol: false })).toBe('12,34,567.00');
    });

    test('handles custom decimals', () => {
      expect(IndianFormatters.formatCurrency(1234567, { decimals: 3 })).toBe('₹12,34,567.000');
    });
  });

  describe('Date Formatting', () => {
    test('formats dates in Indian format', () => {
      const date = new Date('2023-12-25');
      expect(IndianFormatters.formatDate(date)).toBe('25/12/2023');
    });

    test('handles single digit dates', () => {
      const date = new Date('2023-05-05');
      expect(IndianFormatters.formatDate(date)).toBe('05/05/2023');
    });
  });
});