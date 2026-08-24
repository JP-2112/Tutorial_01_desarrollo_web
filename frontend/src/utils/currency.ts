const copFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Formats a numeric price as Colombian pesos, without the leading currency symbol
 * (the "$" is added separately in the templates that use this).
 */
export function formatToCOP(price: number): string {
  return copFormatter.format(price).replace(/^\s*\$\s?/, '');
}
