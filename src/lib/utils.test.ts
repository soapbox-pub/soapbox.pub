import { describe, it, expect } from 'vitest';
import { shuffleArray } from './utils';

describe('shuffleArray', () => {
  it('should return an array of the same length', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result).toHaveLength(input.length);
  });

  it('should contain all original elements', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result.sort()).toEqual(input.sort());
  });

  it('should not modify the original array', () => {
    const input = [1, 2, 3, 4, 5];
    const originalInput = [...input];
    shuffleArray(input);
    expect(input).toEqual(originalInput);
  });

  it('should handle empty arrays', () => {
    const input: number[] = [];
    const result = shuffleArray(input);
    expect(result).toEqual([]);
  });

  it('should handle single element arrays', () => {
    const input = [42];
    const result = shuffleArray(input);
    expect(result).toEqual([42]);
  });

  it('should produce different orders when called multiple times (probabilistic test)', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results: string[] = [];

    // Run shuffle 10 times
    for (let i = 0; i < 10; i++) {
      results.push(shuffleArray(input).map(String).join(','));
    }

    // With 10 elements, it's extremely unlikely all 10 shuffles would be identical
    const uniqueResults = new Set(results);
    expect(uniqueResults.size).toBeGreaterThan(1);
  });
});