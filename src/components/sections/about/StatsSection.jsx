import { motion } from 'framer-motion';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

const STATS = [
  { value: 7,   suffix: '+', label: 'Years in Business',   icon: '📅' },
  { value: 200, suffix: '+', label: 'Happy Clients',        icon: '🤝' },
  { value: 500, suffix: '+', label: 'Projects Delivered',   icon: '🚀' },
  { value: 11,  suffix: '',  label: 'Services Offered',     icon: '⚡' },
];

function StatItem({ value, suffix, label, icon, index }) {
  const { count, ref } = useCounterAnimation(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center p-6 rounded-2xl
        bg-dark-bg/5 dark:bg-white/[0.04]
        border border-dark-bg/8 dark:border-white/8"
    >
      <span className="text-3xl mb-3" aria-hidden="true">{icon}</span>
      <span className="font-heading font-extrabold text-brand-yellow leading-none mb-2"
        style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
        {count}{suffix}
      </span>
      <span className="text-dark-bg/60 dark:text-white/55 text-sm font-medium tracking-wide">
        {label}
      </span>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 sm:py-24 bg-light-bg dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-heading text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            By the Numbers
          </p>
          <h2
            className="font-heading font-extrabold text-dark-bg dark:text-white leading-[1.1]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            7 Years of{' '}
            <span className="text-brand-yellow">Making Brands Unforgettable</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
