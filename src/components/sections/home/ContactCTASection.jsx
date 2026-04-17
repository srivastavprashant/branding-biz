import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

export function ContactCTASection() {
  return (
    <section className="relative py-20 sm:py-32 bg-light-bg dark:bg-[#080808] overflow-hidden">
      {/* Yellow glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,197,24,0.1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" aria-hidden="true" />

      {/* Decorative watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading font-extrabold text-dark-bg/[0.03] dark:text-white/[0.02] leading-none"
          style={{ fontSize: 'clamp(8rem, 20vw, 18rem)' }}
        >
          LET'S GO
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="fadeUp">
          <p className="font-heading text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Ready?
          </p>

          <h2
            className="font-heading font-extrabold text-dark-bg dark:text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Ready to{' '}
            <span className="text-brand-yellow">Break the Internet?</span>
          </h2>

          <p className="text-dark-bg/55 dark:text-white/55 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Let's build something that makes your competitors sweat. Your brand deserves to be seen, heard, and remembered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" as={Link} to="/contact">
              Let's Talk
            </Button>
            {/* Ghost button — theme-aware border and text */}
            <Button
              variant="ghost"
              size="lg"
              as={Link}
              to="/services"
              className="border border-dark-bg/25 dark:border-white/20 text-dark-bg dark:text-white hover:border-brand-yellow hover:text-brand-yellow"
            >
              See Our Work
            </Button>
          </div>

          {/* Trust badges — theme-aware */}
          <div className="flex flex-wrap justify-center gap-6 mt-14 pt-10 border-t border-dark-bg/10 dark:border-white/8">
            {[
              { icon: '⚡', text: 'Fast Turnaround' },
              { icon: '🎯', text: 'Results-Driven' },
              { icon: '🤝', text: 'Transparent Pricing' },
              { icon: '🏆', text: 'Award-Winning Work' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-dark-bg/50 dark:text-white/40 text-sm">
                <span aria-hidden="true">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
