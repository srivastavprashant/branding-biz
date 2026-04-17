/**
 * Property 5: Carousel navigation stays within bounds
 * Validates: Requirements 8.3
 */
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';

function next(index, total) {
  return (index + 1) % total;
}

function prev(index, total) {
  return (index - 1 + total) % total;
}

describe('Carousel navigation', () => {
  it('Property 5: next/prev always stays within [0, N-1]', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }),
        fc.integer({ min: 0, max: 99 }),
        (n, rawIndex) => {
          const i = rawIndex % n;
          const nextIdx = next(i, n);
          const prevIdx = prev(i, n);
          expect(nextIdx).toBeGreaterThanOrEqual(0);
          expect(nextIdx).toBeLessThan(n);
          expect(prevIdx).toBeGreaterThanOrEqual(0);
          expect(prevIdx).toBeLessThan(n);
        }
      )
    );
  });

  it('wraps around at boundaries', () => {
    expect(next(4, 5)).toBe(0); // last item → wraps to first
    expect(prev(0, 5)).toBe(4); // first item → wraps to last
  });
});
