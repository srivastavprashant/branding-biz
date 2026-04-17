import { describe, it, expect, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';
import * as fc from 'fast-check';
import { ThemeProvider, ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

// Helper component to access context
function ThemeConsumer({ onRender }) {
  const ctx = useContext(ThemeContext);
  onRender(ctx);
  return null;
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('Property 3: toggle is an involution', () => {
    // Validates: Requirements 3.2
    fc.assert(
      fc.property(fc.constantFrom('light', 'dark'), (initialTheme) => {
        localStorage.setItem('bb-theme', initialTheme);
        let ctx;
        const { unmount } = render(
          <ThemeProvider>
            <ThemeConsumer onRender={(c) => { ctx = c; }} />
          </ThemeProvider>
        );
        expect(ctx.theme).toBe(initialTheme);
        act(() => ctx.toggle());
        act(() => ctx.toggle());
        expect(ctx.theme).toBe(initialTheme);
        unmount();
      })
    );
  });

  it('Property 4: localStorage round-trip', () => {
    // Validates: Requirements 3.5
    fc.assert(
      fc.property(fc.constantFrom('light', 'dark'), (themeValue) => {
        localStorage.setItem('bb-theme', themeValue);
        let ctx;
        const { unmount } = render(
          <ThemeProvider>
            <ThemeConsumer onRender={(c) => { ctx = c; }} />
          </ThemeProvider>
        );
        expect(localStorage.getItem('bb-theme')).toBe(themeValue);
        unmount();
      })
    );
  });
});
