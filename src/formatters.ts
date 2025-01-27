import { CurrencyFormatOptions } from './types';

export class IndianFormatters {
  static formatNumber(num: number): string {
    if (isNaN(num)) return '0';
    
    const numStr = Math.abs(num).toString();
    if (Math.abs(num) < 1000) return num.toString();

    const [wholePart, decimalPart] = numStr.split('.');
    const lastThree = wholePart.slice(-3);
    const otherNumbers = wholePart.slice(0, -3);
    const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + 
      (otherNumbers ? ',' : '') + lastThree;
    
    return (num < 0 ? '-' : '') + (decimalPart ? `${formatted}.${decimalPart}` : formatted);
  }

  static formatCurrency(amount: number, options: CurrencyFormatOptions = {}): string {
    if (isNaN(amount)) return '₹0.00';
    
    const { decimals = 2, symbol = true } = options;
    const absAmount = Math.abs(amount);
    const formatted = absAmount.toFixed(decimals);
    const [wholePart, decimalPart] = formatted.split('.');
    const withCommas = this.formatNumber(parseFloat(wholePart));
    const result = `${withCommas}.${decimalPart}`;
    return (amount < 0 ? '-' : '') + (symbol ? `₹${result}` : result);
  }

  static formatDate(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}