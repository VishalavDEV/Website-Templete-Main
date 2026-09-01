import { formatCurrency } from '../formatters';

export function formatUSD(value: number): string {
  return formatCurrency(value, 'USD');
}

export function formatEUR(value: number): string {
  return formatCurrency(value, 'EUR', 'fr-FR');
}
