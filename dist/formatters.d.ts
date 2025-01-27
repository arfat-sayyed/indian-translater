import { CurrencyFormatOptions } from './types';
export declare class IndianFormatters {
    static formatNumber(num: number): string;
    static formatCurrency(amount: number, options?: CurrencyFormatOptions): string;
    static formatDate(date: Date): string;
}
