/**
 * Presentation-only currency and number formatters.
 * Money received from APIs is in kobo and should only be formatted for display.
 * No financial/business calculations are implemented here.
 */

/**
 * Formats an amount in kobo into Nigerian Naira (₦).
 * 100 kobo = ₦1
 * Example: 5000000 kobo -> ₦50,000
 */
export function formatKoboToNaira(kobo: number): string {
  if (typeof kobo !== 'number' || isNaN(kobo)) {
    return '₦0';
  }
  const naira = kobo / 100;
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(naira).replace('NGN', '₦').trim();
}

/**
 * Calculates a presentation-only capacity percentage from capacity_used and capacity_limit.
 */
export function calculateCapacityPercentage(used: number, limit: number): number {
  if (!limit || limit <= 0) return 0;
  const ratio = (used / limit) * 100;
  return Math.min(100, Math.max(0, Math.round(ratio)));
}
