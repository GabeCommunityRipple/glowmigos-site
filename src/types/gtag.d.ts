declare global {
  interface Window {
    // Optional: undefined until gtag.js loads (and never set when
    // NEXT_PUBLIC_GOOGLE_ADS_ID is unset).
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
