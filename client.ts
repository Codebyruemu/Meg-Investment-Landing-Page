import { ProductsResponse, PublicSettings } from './types';
import { mockProductsResponse, mockPublicSettings } from './mock-data';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetches public investment products.
 * If backend fails or is not connected, falls back to isolated mock data.
 * Throws or returns null when explicitly forced to fail for testing.
 */
export async function getPublicProducts(options?: { forceFail?: boolean; delayMs?: number }): Promise<ProductsResponse | null> {
  if (options?.forceFail) {
    throw new Error('Simulated network error');
  }

  if (options?.delayMs) {
    await new Promise(resolve => setTimeout(resolve, options.delayMs));
  }

  if (API_BASE_URL) {
    try {
      const res = await fetch(`${API_BASE_URL}/public/products`, {
        next: { revalidate: 60 },
      });
      if (!res.ok) {
        return null;
      }
      return await res.json();
    } catch {
      // In production/staging, network failure returns null to trigger hiding Plans section
      return null;
    }
  }

  // Use isolated canonical mock data
  return mockProductsResponse;
}

/**
 * Fetches public platform settings.
 * RC, SEC, referral percent, store URLs, and contact info are strictly driven by this endpoint.
 */
export async function getPublicSettings(): Promise<PublicSettings | null> {
  if (API_BASE_URL) {
    try {
      const res = await fetch(`${API_BASE_URL}/public/settings`, {
        next: { revalidate: 300 },
      });
      if (!res.ok) {
        return mockPublicSettings;
      }
      return await res.json();
    } catch {
      return mockPublicSettings;
    }
  }

  return mockPublicSettings;
}
