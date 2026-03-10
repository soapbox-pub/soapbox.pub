/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Plausible Analytics domain (eg. "example.com"). If not set, Plausible is disabled. */
  readonly VITE_PLAUSIBLE_DOMAIN?: string;
  /** Plausible API endpoint URL. Defaults to "https://plausible.io/api/event". */
  readonly VITE_PLAUSIBLE_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
