import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ParticleCanvas } from '@/components/ui/ParticleCanvas';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease, delay },
});

function StatPill({ value, label, delay = 0 }) {
  return (
    <motion.div
      {...fadeIn(delay)}
      className="flex flex-col items-center justify-center px-5 py-3 rounded-xl
        bg-black/20 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 backdrop-blur-sm"
    >
      <span className="font-heading font-extrabold text-brand-yellow text-xl leading-none">{value}</span>
      <span className="text-dark-bg/60 dark:text-white/50 text-xs mt-1 tracking-wide">{label}</span>
    </motion.div>
  );
}

function MonogramCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: 0.3 }}
      className="relative w-full max-w-sm mx-auto"
    >
      <div
        className="absolute inset-0 rounded-2xl blur-3xl"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(245,197,24,0.18) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/[0.04] backdrop-blur-md p-10 text-center"
      >
        <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-brand-yellow/50 rounded-tl-sm" aria-hidden="true" />
        <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-brand-yellow/50 rounded-tr-sm" aria-hidden="true" />
        <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-brand-yellow/50 rounded-bl-sm" aria-hidden="true" />
        <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-brand-yellow/50 rounded-br-sm" aria-hidden="true" />
        <p className="font-heading font-extrabold text-brand-yellow leading-none mb-3" style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}>BB</p>
        <div className="w-12 h-px bg-brand-yellow/30 mx-auto mb-3" aria-hidden="true" />
        <p className="font-heading font-bold text-dark-bg dark:text-white text-base mb-1">Since 2017</p>
        <p className="text-dark-bg/50 dark:text-white/40 text-sm">Indra Nagar, Lucknow</p>
        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-brand-yellow shadow-lg shadow-brand-yellow/40" aria-hidden="true" />
      </motion.div>
      <motion.div {...fadeIn(0.7)} className="flex gap-3 mt-4 justify-center">
        <StatPill value="200+" label="Clients"  delay={0.75} />
        <StatPill value="7+"   label="Years"    delay={0.85} />
        <StatPill value="500+" label="Projects" delay={0.95} />
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-white dark:bg-[#080808] overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <ParticleCanvas />
      </motion.div>

      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(245,197,24,0.1) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">

          {/* LEFT: Text + CTAs */}
          <div className="flex flex-col justify-center">
            <motion.div {...fadeIn(0.1)} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" aria-hidden="true" />
                <span className="font-heading text-brand-yellow text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                  Digital Marketing Agency · Lucknow · Since 2017
                </span>
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-heading font-extrabold text-dark-bg dark:text-white leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.8rem)' }}
            >
              The Digital Jungle?{' '}
              <span className="text-brand-yellow">We're Your Tour Guides.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.32)}
              className="text-dark-bg/60 dark:text-white/55 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8"
            >
              Stop blending in. We craft bold digital strategies, cinematic
              content, and campaigns that make your brand impossible to ignore.
            </motion.p>

            <motion.div {...fadeUp(0.44)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button variant="primary" size="lg" as={Link} to="/contact">Get Famous</Button>
              <Button
                variant="ghost"
                size="lg"
                as={Link}
                to="/services"
                className="border border-dark-bg/20 dark:border-white/20 text-dark-bg dark:text-white hover:border-brand-yellow hover:text-brand-yellow"
              >
                See Our Magic
              </Button>
            </motion.div>

            <motion.div {...fadeIn(1.2)} className="flex items-center gap-3">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="w-5 h-8 rounded-full border border-dark-bg/20 dark:border-white/20 flex items-start justify-center pt-1.5 flex-shrink-0"
              >
                <div className="w-1 h-2 bg-brand-yellow rounded-full" />
              </motion.div>
              <span className="text-dark-bg/30 dark:text-white/25 text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
            </motion.div>
          </div>

          {/* RIGHT: Visual — hidden on mobile, shown on lg+ */}
          <div className="hidden lg:flex items-center justify-end">
            <MonogramCard />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--tw-gradient-to, #080808))' }}
        aria-hidden="true"
      />
    </section>
  );
}
