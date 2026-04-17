import { Link } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta('404 — Page Not Found | Branding Biz', 'The page you are looking for does not exist.');

  return (
    <main className="pt-16 min-h-screen flex flex-col items-center justify-center gap-6 bg-white dark:bg-[#080808]">
      <p className="font-heading text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em]">Error 404</p>
      <h1 className="font-heading font-extrabold text-dark-bg dark:text-white" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>
        Lost?
      </h1>
      <p className="text-dark-bg/60 dark:text-white/50 text-lg text-center max-w-sm">
        This page doesn't exist. Let's get you back to the digital jungle.
      </p>
      <Link
        to="/"
        className="mt-4 px-8 py-4 bg-brand-yellow text-dark-bg font-heading font-semibold rounded-lg hover:bg-brand-yellow-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
      >
        Back to Home
      </Link>
    </main>
  );
}
