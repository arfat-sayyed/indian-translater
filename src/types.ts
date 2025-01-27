export type Language = 'en' | 'hi' | 'mr';

export interface TranslationDictionary {
  [key: string]: {
    hi: string;
    mr: string;
  };
}

export interface CurrencyFormatOptions {
  decimals?: number;
  symbol?: boolean;
}