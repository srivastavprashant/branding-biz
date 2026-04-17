import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const stats = [
  { value: '200+', label: 'Happy Clients' },
  { value: '7+',   label: 'Years Active' },
  { value: '500+', label: 'Projects Done' },
  { value: '11',   label: 'Services' },
];

export function WhoWeAreSection() {
  return (
    <section className="relative py-16 sm:py-28 bg-light-bg dark:bg-[#0A0A0A] overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(245,197,24,0.07) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <AnimatedSection variant="fadeUp">
            <p className="font-heading text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Who We Are
            </p>
            <h2
              className="font-heading font-extrabold text-dark-bg dark:text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
            >
              Lucknow Born.{' '}
              <span className="text-brand-yellow">Digitally Obsessed.</span>{' '}
              Since 2017.
            </h2>
            <p className="text-dark-bg/60 dark:text-white/60 text-lg leading-relaxed mb-4">
              We started Branding Biz with one mission: to give businesses in Lucknow — and beyond — the digital firepower they deserve. No fluff, no jargon, just results that make your competitors nervous.
            </p>
            <p className="text-dark-bg/45 dark:text-white/45 leading-relaxed mb-10">
              From a small office in Indra Nagar to a full-service digital agency, we've helped 200+ brands find their voice, own their space, and dominate their market. We're not just your agency — we're your unfair advantage.
            </p>

            {/* Stats — theme-aware */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ value, label }, i) => (
                <AnimatedSection key={label} variant="scaleIn" delay={i * 0.08}>
                  <div className="bg-dark-bg/5 dark:bg-white/[0.04] border border-dark-bg/10 dark:border-white/10 rounded-xl p-4 text-center">
                    <p className="font-heading font-extrabold text-brand-yellow text-2xl leading-none mb-1">
                      {value}
                    </p>
                    <p className="text-dark-bg/50 dark:text-white/50 text-xs tracking-wide">{label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Visual */}
          <AnimatedSection variant="slideLeft">
            <div className="relative">
              {/* Main card — theme-aware */}
              <div className="relative rounded-2xl overflow-hidden border border-dark-bg/10 dark:border-white/10 bg-dark-bg/5 dark:bg-white/[0.03] p-10 text-center">
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(245,197,24,0.08) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <p
                    className="font-heading font-extrabold text-brand-yellow leading-none mb-4"
                    style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}
                  >
                    BB
                  </p>
                  <div className="w-16 h-0.5 bg-brand-yellow/40 mx-auto mb-4 rounded-full" />
                  <p className="font-heading text-dark-bg dark:text-white text-xl font-bold mb-2">Since 2017</p>
                  <p className="text-dark-bg/40 dark:text-white/40 text-sm tracking-wide">Indra Nagar, Lucknow</p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-yellow/40 rounded-tl" aria-hidden="true" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-yellow/40 rounded-tr" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-yellow/40 rounded-bl" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-yellow/40 rounded-br" aria-hidden="true" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 bg-brand-yellow text-dark-bg rounded-xl px-5 py-3 shadow-lg shadow-brand-yellow/20"
              >
                <p className="font-heading font-extrabold text-sm">🏆 Top Agency</p>
                <p className="text-xs font-medium opacity-70">Lucknow, 2024</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
