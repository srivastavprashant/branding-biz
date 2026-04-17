import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import { usePageMeta } from '@/hooks/usePageMeta';

function PageWithMeta({ title, description }) {
  usePageMeta(title, description);
  return <div />;
}

const PAGE_TITLES = [
  'Branding Biz — Digital Marketing Agency, Lucknow',
  'About Us — Branding Biz',
  'Our Services — Branding Biz',
  'Portfolio & Clients — Branding Biz',
  'Meet the Team — Branding Biz',
  'Contact Us — Branding Biz',
];

describe('usePageMeta', () => {
  it('Property 11: page title is set and unique per route', () => {
    // Validates: Requirements 13.5
    // Verify all titles are unique
    const uniqueTitles = new Set(PAGE_TITLES);
    expect(uniqueTitles.size).toBe(PAGE_TITLES.length);

    // Verify each title is set correctly
    PAGE_TITLES.forEach((title) => {
      const { unmount } = render(<PageWithMeta title={title} description="test" />);
      expect(document.title).toBe(title);
      expect(document.title.length).toBeGreaterThan(0);
      unmount();
    });
  });

  it('sets document.title to the provided title', () => {
    // jsdom trims leading/trailing whitespace and collapses internal
    // consecutive whitespace in document.title, so we constrain to
    // strings that don't start/end with whitespace and have no
    // consecutive whitespace characters.
    fc.assert(
      fc.property(
        fc
          .string({ minLength: 1 })
          .filter(
            (s) => s === s.trim() && s.length > 0 && !/\s{2,}/.test(s)
          ),
        (title) => {
          const { unmount } = render(<PageWithMeta title={title} description="" />);
          expect(document.title).toBe(title);
          unmount();
        }
      )
    );
  });
});
