import { IndianTranslator } from '../translator';

describe('IndianTranslator', () => {
  let translator: IndianTranslator;

  beforeEach(() => {
    translator = new IndianTranslator();
  });

  test('translates text to Hindi', () => {
    expect(translator.translate('hello', 'hi')).toBe('नमस्ते');
    expect(translator.translate('thank you', 'hi')).toBe('धन्यवाद');
    expect(translator.translate('customer', 'hi')).toBe('ग्राहक');
  });

  test('translates text to Marathi', () => {
    expect(translator.translate('hello', 'mr')).toBe('नमस्कार');
    expect(translator.translate('thank you', 'mr')).toBe('धन्यवाद');
    expect(translator.translate('customer', 'mr')).toBe('ग्राहक');
  });

  test('returns original text for English', () => {
    expect(translator.translate('hello', 'en')).toBe('hello');
    expect(translator.translate('thank you', 'en')).toBe('thank you');
  });

  test('returns original text when translation not found', () => {
    expect(translator.translate('nonexistent', 'hi')).toBe('nonexistent');
    expect(translator.translate('nonexistent', 'mr')).toBe('nonexistent');
  });

  test('handles case-insensitive translations', () => {
    expect(translator.translate('Hello', 'hi')).toBe('नमस्ते');
    expect(translator.translate('HELLO', 'hi')).toBe('नमस्ते');
    expect(translator.translate('ThAnK yOu', 'hi')).toBe('धन्यवाद');
  });
});