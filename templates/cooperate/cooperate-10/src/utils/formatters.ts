import { Currency, CurrencyConfig } from '../types';
import { CURRENCY_CONFIGS } from '../data/mockData';

export function formatCurrency(amount: number, currency: Currency = 'USD'): string {
  const config: CurrencyConfig = CURRENCY_CONFIGS[currency] || CURRENCY_CONFIGS.USD;
  const converted = amount * config.rate;

  if (currency === 'INR') {
    // For INR, if large, format in Cr / L or standard Indian notation
    if (Math.abs(converted) >= 10000000) {
      const cr = converted / 10000000;
      return `₹ ${cr.toFixed(2)} Cr`;
    }
    if (Math.abs(converted) >= 100000) {
      const lakh = converted / 100000;
      return `₹ ${lakh.toFixed(2)} L`;
    }
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(converted);
  }

  // Standard USD / EUR / GBP
  if (Math.abs(converted) >= 1000000000) {
    return `${config.symbol}${(converted / 1000000000).toFixed(2)}B`;
  }
  if (Math.abs(converted) >= 1000000) {
    return `${config.symbol}${(converted / 1000000).toFixed(2)}M`;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: config.code,
    maximumFractionDigits: converted % 1 === 0 ? 0 : 2,
  }).format(converted);
}

export function formatPercent(value: number, includeSign: boolean = true): string {
  const sign = includeSign && value > 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function triggerDownload(filename: string, content: string, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
