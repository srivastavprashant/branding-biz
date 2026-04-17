import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';

// Import all page components
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import PortfolioPage from '@/pages/PortfolioPage';
import TeamPage from '@/pages/TeamPage';
import ContactPage from '@/pages/ContactPage';

const PAGES = [
  { name: 'HomePage', Component: HomePage, route: '/' },
  { name: 'AboutPage', Component: AboutPage, route: '/about' },
  { name: 'ServicesPage', Component: ServicesPage, route: '/services' },
  { name: 'PortfolioPage', Component: PortfolioPage, route: '/portfolio' },
  { name: 'TeamPage', Component: TeamPage, route: '/team' },
  { name: 'ContactPage', Component: ContactPage, route: '/contact' },
];

function renderPage(Component, route) {
  localStorage.setItem('bb-theme', 'light');
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[route]}>
        <Component />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('Property 10: All images have non-empty alt attributes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  PAGES.forEach(({ name, Component, route }) => {
    it(`${name}: all <img> elements have non-empty alt attributes`, () => {
      const { container, unmount } = renderPage(Component, route);
      const images = container.querySelectorAll('img');
      images.forEach((img) => {
        expect(img.hasAttribute('alt'), `<img> in ${name} is missing alt attribute`).toBe(true);
        expect(img.getAttribute('alt').trim().length, `<img> in ${name} has empty alt attribute`).toBeGreaterThan(0);
      });
      unmount();
    });
  });
});
