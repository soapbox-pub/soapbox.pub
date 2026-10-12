import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

// jest-dom's bundled vitest types augment `Assertion<T>`, which no longer
// merges with Vitest 5's `Assertion<R, T>`. Vitest 5 reads custom matchers
// from `Matchers` instead.
declare module 'vitest' {
  interface Matchers<R, T> extends TestingLibraryMatchers<unknown, R> {}
}
