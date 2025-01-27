import { Language, TranslationDictionary } from './types';
import { translations } from './translations';

export class IndianTranslator {
  private dictionary: TranslationDictionary = translations;

  translate(text: string, language: Language): string {
    if (text === undefined || text === null || language === 'en') {
      return text ?? '';
    }
    
    const normalizedText = text.toString().toLowerCase().trim();
    if (!normalizedText) return text;
    
    const translation = this.dictionary[normalizedText];
    if (!translation || !translation[language]) return text;

    return translation[language];
  }

  addTranslations(newTranslations: TranslationDictionary) {
    if (!newTranslations || typeof newTranslations !== 'object') {
      throw new Error('Invalid translations object');
    }

    this.dictionary = {
      ...this.dictionary,
      ...Object.entries(newTranslations).reduce((acc, [key, value]) => {
        if (!key || !value || !value.hi || !value.mr) {
          throw new Error(`Invalid translation entry for key: ${key}`);
        }
        return {
          ...acc,
          [key.toLowerCase().trim()]: {
            hi: value.hi.trim(),
            mr: value.mr.trim()
          }
        };
      }, {})
    };
  }
}