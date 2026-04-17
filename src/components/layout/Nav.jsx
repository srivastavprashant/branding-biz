import { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Track scroll position via Framer Motion for smooth interpolation
  const { scrollY } = useScroll();

  // Derive opacity values from scroll position — smooth 0→1 over first 80px
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.92]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const blurAmount = useTransform(scrollY, [0, 80], [0, 12]);

  // Track boolean state for conditional classes
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  const linkClass = ({ isActive }) =>
    cn(
      'font-heading font-semibold transition-colors duration-200 text-sm',
      isActive
        ? 'text-brand-yellow'
        : isDark
          ? 'text-white/75 hover:text-brand-yellow'
          : 'text-dark-bg/75 hover:text-brand-yellow'
    );

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          // Smooth background fade using motion values
          backgroundColor: isDark
            ? `rgba(8, 8, 8, ${bgOpacity.get()})`
            : `rgba(255, 255, 255, ${bgOpacity.get()})`,
          backdropFilter: `blur(${blurAmount.get()}px)`,
          WebkitBackdropFilter: `blur(${blurAmount.get()}px)`,
        }}
        animate={{
          backgroundColor: isScrolled
            ? isDark ? 'rgba(8,8,8,0.92)' : 'rgba(255,255,255,0.92)'
            : 'rgba(0,0,0,0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Animated bottom border — fades in smoothly */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: isDark
              ? 'rgba(255,255,255,0.08)'
              : 'rgba(0,0,0,0.08)',
          }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <NavLink to="/" className="font-heading text-xl font-bold text-brand-yellow z-50 relative">
            Branding Biz
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
                {({ isActive }) => (
                  <span aria-current={isActive ? 'page' : undefined}>{label}</span>
                )}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2 z-50 relative">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className={cn(
                'p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow',
                menuOpen
                  ? 'text-white/75'
                  : isDark
                    ? 'text-white/75 hover:bg-white/10'
                    : 'text-dark-bg/75 hover:bg-black/5'
              )}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'md:hidden fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8',
            isDark ? 'bg-[#080808]' : 'bg-white'
          )}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className={cn(
              'absolute top-4 right-4 p-2 rounded-lg',
              isDark ? 'text-white/75 hover:bg-white/10' : 'text-dark-bg/75 hover:bg-black/5'
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          <span className="font-heading text-xl font-bold text-brand-yellow mb-4">
            Branding Biz
          </span>

          {NAV_LINKS.map(({ to, label }, i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            >
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'font-heading text-2xl font-bold transition-colors duration-200',
                    isActive
                      ? 'text-brand-yellow'
                      : isDark
                        ? 'text-white/75 hover:text-brand-yellow'
                        : 'text-dark-bg/75 hover:text-brand-yellow'
                  )
                }
              >
                {({ isActive }) => (
                  <span aria-current={isActive ? 'page' : undefined}>{label}</span>
                )}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
