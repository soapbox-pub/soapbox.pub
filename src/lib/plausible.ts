import { init } from '@plausible-analytics/tracker';

/** Initialize Plausible Analytics if `VITE_PLAUSIBLE_DOMAIN` is set. */
export function initPlausible(): void {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

  if (!domain) {
    return;
  }

  init({
    domain,
    endpoint: import.meta.env.VITE_PLAUSIBLE_ENDPOINT,
  });
}
