"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndianTranslator = void 0;
const translations_1 = require("./translations");
class IndianTranslator {
    constructor() {
        this.dictionary = translations_1.translations;
    }
    translate(text, language) {
        if (text === undefined || text === null || language === 'en') {
            return text !== null && text !== void 0 ? text : '';
        }
        const normalizedText = text.toString().toLowerCase().trim();
        if (!normalizedText)
            return text;
        const translation = this.dictionary[normalizedText];
        if (!translation || !translation[language])
            return text;
        return translation[language];
    }
    addTranslations(newTranslations) {
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
exports.IndianTranslator = IndianTranslator;
