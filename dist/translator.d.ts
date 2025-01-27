import { Language, TranslationDictionary } from './types';
export declare class IndianTranslator {
    private dictionary;
    translate(text: string, language: Language): string;
    addTranslations(newTranslations: TranslationDictionary): void;
}
