# indian-translater

A powerful translation library for Indian languages with built-in support for Hindi and Marathi translations, along with Indian number system, currency, and date formatting.

## Features

- Translation support for Hindi and Marathi
- Indian number system formatting (lakhs and crores)
- Indian currency (INR) formatting
- Indian date formatting
- Built-in translations (works offline)
- TypeScript support

## Installation

```bash
npm install indian-translater
```

## Usage

### Basic Translation

```typescript
import { IndianTranslator } from 'indian-translater';

const translator = new IndianTranslator();

// Translate to Hindi
console.log(translator.translate('hello', 'hi')); // नमस्ते

// Translate to Marathi
console.log(translator.translate('hello', 'mr')); // नमस्कार
```

### Number Formatting

```typescript
import { IndianFormatters } from 'indian-translater';

// Format number in Indian system
console.log(IndianFormatters.formatNumber(1234567)); // 12,34,567
```

### Currency Formatting

```typescript
import { IndianFormatters } from 'indian-translater';

// Format currency with symbol
console.log(IndianFormatters.formatCurrency(1234567)); // ₹12,34,567.00

// Format currency without symbol
console.log(IndianFormatters.formatCurrency(1234567, { symbol: false })); // 12,34,567.00
```

### Date Formatting

```typescript
import { IndianFormatters } from 'indian-translater';

const date = new Date();
console.log(IndianFormatters.formatDate(date)); // DD/MM/YYYY format
```

### Adding Custom Translations

```typescript
const customTranslations = {
  'good morning': {
    hi: 'शुभ प्रभात',
    mr: 'शुभ सकाळ'
  }
};

translator.addTranslations(customTranslations);
```

## License

MIT